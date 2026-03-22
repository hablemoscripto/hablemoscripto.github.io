// Google Analytics 4 utility wrapper
// Reads measurement ID from VITE_GA4_MEASUREMENT_ID env var.
// All functions silently no-op if the env var is not set.

type GtagCommand = 'config' | 'event' | 'js' | 'set';

type GtagParams = Record<string, string | number | boolean | undefined>;

type GtagFunction = (
  command: GtagCommand,
  targetOrEvent: string | Date,
  params?: GtagParams,
) => void;

declare global {
  interface Window {
    gtag: GtagFunction;
    dataLayer: Array<unknown>;
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID as
  | string
  | undefined;

let initialized = false;

function isEnabled(): boolean {
  return Boolean(MEASUREMENT_ID);
}

/**
 * Dynamically injects the GA4 gtag.js script and initializes it.
 * Only runs once and only in production.
 */
export function initAnalytics(): void {
  if (initialized || !isEnabled() || !import.meta.env.PROD) {
    return;
  }

  if (typeof document === 'undefined') {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(
    ...args: [GtagCommand, string | Date, GtagParams?]
  ) {
    window.dataLayer.push(args);
  } as GtagFunction;

  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID!, {
    send_page_view: false,
  });

  initialized = true;
}

/**
 * Sends a page_view event.
 */
export function trackPageView(path: string, title?: string): void {
  if (!isEnabled()) return;

  window.gtag?.('event', 'page_view', {
    page_path: path,
    ...(title !== undefined && { page_title: title }),
  });
}

/**
 * Sends a custom event.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!isEnabled()) return;

  window.gtag?.('event', eventName, params);
}

/**
 * Tracks when a user starts a lesson.
 */
export function trackLessonStart(lessonId: number): void {
  trackEvent('lesson_start', { lesson_id: lessonId });
}

/**
 * Tracks when a user completes a lesson, optionally with quiz score.
 */
export function trackLessonComplete(
  lessonId: number,
  quizScore?: number,
): void {
  trackEvent('lesson_complete', {
    lesson_id: lessonId,
    ...(quizScore !== undefined && { quiz_score: quizScore }),
  });
}

/**
 * Tracks a new user sign-up.
 */
export function trackSignUp(method: 'email' | 'google'): void {
  trackEvent('sign_up', { method });
}

/**
 * Tracks a user login.
 */
export function trackLogin(method: 'email' | 'google'): void {
  trackEvent('login', { method });
}

/**
 * Tracks a premium purchase.
 */
export function trackPremiumPurchase(
  amount: number,
  currency: string,
): void {
  trackEvent('purchase', {
    value: amount,
    currency,
    transaction_type: 'premium',
  });
}

/**
 * Tracks when a user sends a chat message.
 */
export function trackChatMessage(): void {
  trackEvent('chat_message');
}

/**
 * Tracks when a user unlocks an achievement.
 */
export function trackAchievementUnlock(achievementId: string): void {
  trackEvent('achievement_unlock', { achievement_id: achievementId });
}
