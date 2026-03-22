// Lightweight error reporting utility.
// In development: logs structured errors to console.
// In production: sends errors to VITE_ERROR_REPORTING_URL if configured,
// otherwise falls back to console.error.

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  metadata?: Record<string, unknown>;
}

interface ErrorPayload {
  message: string;
  stack?: string;
  level: 'info' | 'warning' | 'error';
  context: ErrorContext;
  timestamp: string;
  url?: string;
  userAgent?: string;
}

declare global {
  interface Window {
    __errorReportingInitialized?: boolean;
  }
}

const REPORTING_URL = import.meta.env.VITE_ERROR_REPORTING_URL as
  | string
  | undefined;

function normalizeError(error: unknown): { message: string; stack?: string } {
  if (error instanceof Error) {
    return { message: error.message, stack: error.stack };
  }

  if (typeof error === 'string') {
    return { message: error };
  }

  if (error !== null && error !== undefined && typeof error === 'object') {
    const msg =
      'message' in error && typeof (error as Record<string, unknown>).message === 'string'
        ? (error as Record<string, unknown>).message as string
        : String(error);
    return { message: msg };
  }

  return { message: String(error) };
}

function buildPayload(
  message: string,
  level: 'info' | 'warning' | 'error',
  stack: string | undefined,
  context: ErrorContext,
): ErrorPayload {
  const payload: ErrorPayload = {
    message,
    stack,
    level,
    context,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== 'undefined') {
    payload.url = window.location?.href;
    payload.userAgent = navigator?.userAgent;
  }

  return payload;
}

function logToConsole(payload: ErrorPayload): void {
  const prefix = `[${payload.level.toUpperCase()}]`;
  const parts: string[] = [prefix, payload.message];

  if (payload.context.component) {
    parts.push(`| Component: ${payload.context.component}`);
  }
  if (payload.context.action) {
    parts.push(`| Action: ${payload.context.action}`);
  }

  const formatted = parts.join(' ');

  switch (payload.level) {
    case 'info':
      console.info(formatted, payload.context.metadata ?? '');
      break;
    case 'warning':
      console.warn(formatted, payload.context.metadata ?? '');
      break;
    case 'error':
      console.error(formatted, payload.context.metadata ?? '');
      if (payload.stack) {
        console.error(payload.stack);
      }
      break;
  }
}

function sendToEndpoint(payload: ErrorPayload): void {
  if (!REPORTING_URL) {
    return;
  }

  try {
    // Use sendBeacon for reliability (works during page unload).
    // Fall back to fetch if sendBeacon is unavailable or fails.
    const body = JSON.stringify(payload);
    const sent =
      typeof navigator !== 'undefined' &&
      typeof navigator.sendBeacon === 'function' &&
      navigator.sendBeacon(REPORTING_URL, body);

    if (!sent && typeof fetch !== 'undefined') {
      fetch(REPORTING_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      }).catch(() => {
        // Silently swallow — avoid recursive error reporting
      });
    }
  } catch {
    // Silently swallow — the reporting layer must never throw
  }
}

function dispatch(payload: ErrorPayload): void {
  if (!import.meta.env.PROD) {
    logToConsole(payload);
    return;
  }

  if (REPORTING_URL) {
    sendToEndpoint(payload);
  } else {
    logToConsole(payload);
  }
}

/**
 * Reports an error with optional context.
 */
export function reportError(error: unknown, context: ErrorContext = {}): void {
  const { message, stack } = normalizeError(error);
  const payload = buildPayload(message, 'error', stack, context);
  dispatch(payload);
}

/**
 * Captures a message at a given severity level.
 */
export function captureMessage(
  message: string,
  level: 'info' | 'warning' | 'error',
  context: ErrorContext = {},
): void {
  const payload = buildPayload(message, level, undefined, context);
  dispatch(payload);
}

/**
 * Sets up global `unhandledrejection` and `error` event handlers.
 * Safe to call multiple times — only installs handlers once.
 */
export function initErrorReporting(): void {
  if (typeof window === 'undefined') {
    return;
  }

  if (window.__errorReportingInitialized) {
    return;
  }

  window.addEventListener('error', (event: ErrorEvent) => {
    reportError(event.error ?? event.message, {
      action: 'global_error_handler',
      metadata: {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      },
    });
  });

  window.addEventListener(
    'unhandledrejection',
    (event: PromiseRejectionEvent) => {
      reportError(event.reason, {
        action: 'unhandled_promise_rejection',
      });
    },
  );

  window.__errorReportingInitialized = true;
}
