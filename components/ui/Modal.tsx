import React, { useEffect, useRef, useId, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  ariaLabel?: string;
  maxWidth?: string;
  showCloseButton?: boolean;
  children: React.ReactNode;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: 0.2, ease: 'easeIn' as const },
  },
};

/**
 * Returns all focusable elements within a container, respecting visibility
 * and disabled state.
 */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ];
  return Array.from(
    container.querySelectorAll<HTMLElement>(selectors.join(', '))
  ).filter(
    (el) => !el.closest('[hidden]') && el.offsetParent !== null
  );
}

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  ariaLabel,
  maxWidth = 'max-w-md',
  showCloseButton = true,
  children,
}: ModalProps) {
  const id = useId();
  const titleId = `${id}-title`;
  const subtitleId = `${id}-subtitle`;

  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Element | null>(null);

  // Capture the element that had focus when the modal opens, so we can
  // restore it on close.
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
    }
  }, [isOpen]);

  // Restore focus to the trigger element after the modal fully unmounts.
  // We use a ref + cleanup pattern so the restore happens on the *next*
  // isOpen=false transition, not on component unmount.
  useEffect(() => {
    if (!isOpen && triggerRef.current) {
      const el = triggerRef.current as HTMLElement;
      // The element may have been removed from the DOM while the modal was
      // open; only restore if it is still focusable.
      if (typeof el.focus === 'function' && document.contains(el)) {
        el.focus();
      }
      triggerRef.current = null;
    }
  }, [isOpen]);

  // Scroll lock: prevent body from scrolling while the modal is open.
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Account for scrollbar width to avoid layout shift.
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  // Move initial focus into the modal once the panel mounts.
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    // Slight delay to let Framer Motion finish the initial render so all
    // children are in the DOM and focusable.
    const raf = requestAnimationFrame(() => {
      if (!panelRef.current) return;
      const focusable = getFocusableElements(panelRef.current);
      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        // Fallback: focus the panel itself so keyboard events are captured.
        panelRef.current.focus();
      }
    });

    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  // Keyboard handler: Escape to close + focus trap.
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }

      if (e.key === 'Tab' && panelRef.current) {
        const focusable = getFocusableElements(panelRef.current);
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    },
    [onClose]
  );

  // Prevent backdrop click from propagating into children.
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Only close if the click target is the backdrop itself, not a child.
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onKeyDown={handleKeyDown}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />

          {/* Centering wrapper — click-outside target */}
          <div
            className="relative z-10 flex items-center justify-center w-full h-full p-4"
            onClick={handleBackdropClick}
          >
            {/* Panel */}
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? titleId : undefined}
              aria-label={!title ? ariaLabel : undefined}
              aria-describedby={subtitle ? subtitleId : undefined}
              tabIndex={-1}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`relative bg-navy-900 border border-navy-700 rounded-2xl shadow-2xl w-full ${maxWidth} mx-4 outline-none`}
            >
              {/* Close button */}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-navy-400 hover:text-white transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={24} />
                </button>
              )}

              {/* Header */}
              {(title || subtitle) && (
                <div className="px-6 pt-6 pb-0">
                  {title && (
                    <h2
                      id={titleId}
                      className="text-xl font-heading font-semibold text-white"
                    >
                      {title}
                    </h2>
                  )}
                  {subtitle && (
                    <p
                      id={subtitleId}
                      className="mt-1 text-sm text-navy-400"
                    >
                      {subtitle}
                    </p>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="p-6">{children}</div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default Modal;
