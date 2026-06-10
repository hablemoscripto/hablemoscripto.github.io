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
 * Sets up the gtag stub + dataLayer, queues js/config, and injects gtag.js.
 * Runs once, only in production with a measurement ID.
 *
 * Called at MODULE LOAD (below) so window.gtag exists and js/config are queued
 * before the first trackPageView. React runs child effects before parent
 * effects, so the route tracker's first page_view used to fire before the old
 * App-level initAnalytics() — landing the landing-page view (the one ad
 * attribution depends on) in a no-op. Queuing at import time fixes the order:
 * once gtag.js loads it replays js → config → page_view from the dataLayer.
 */
function setupGtag(): void {
  if (initialized || !isEnabled() || !import.meta.env.PROD) {
    return;
  }

  if (typeof document === 'undefined') {
    return;
  }

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

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  initialized = true;
}

// Initialize at import time, before any component renders or effects run.
setupGtag();

/**
 * Retained for the existing App.tsx call site. Idempotent — the real setup runs
 * at module load; this is a safety net in case the module-load run was skipped.
 */
export function initAnalytics(): void {
  setupGtag();
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
