# Mobile Quality Audit — Hablemos Cripto

## Executive Summary

After reviewing every component in the codebase, the site is **reasonably responsive** (it won't break on mobile), but there are **~25 targeted improvements** that would take it from "works on mobile" to "feels native and flawless." The issues fall into 6 categories.

---

## 1. CRITICAL — Chat Widget Full-Screen on Mobile

**File:** `components/ChatWidget.tsx`

The floating chat window (`w-[90vw] sm:w-[400px] h-[500px]`) is the #1 mobile pain point:

- [ ] **Make chat full-screen on mobile** — On phones, the chat should take `fixed inset-0` (100vw × 100vh) instead of being a tiny floating card. Use `sm:` breakpoint to keep the floating card on tablets+.
- [ ] **Handle mobile keyboard** — When the on-screen keyboard opens, the input field gets pushed up and the message area compresses. Use `visualViewport` API or CSS `dvh` units to dynamically resize.
- [ ] **Safe area for the toggle button** — `bottom-6 right-6` can overlap with the iOS Safari bottom bar / home indicator on newer iPhones. Use `pb-[env(safe-area-inset-bottom)]` or increase the bottom offset.

---

## 2. CRITICAL — Lightbox & Text Selection Are Mouse-Only

**File:** `components/LessonView.tsx`

- [ ] **Image lightbox has no touch support** — Zoom/pan uses `onMouseDown/Move/Up` and `onWheel`. Need to add `onTouchStart/Move/End` for pinch-to-zoom and drag-to-pan. The instructions text ("🖱️ Scroll para zoom", "✋ Arrastra para mover") should change on mobile to "Pellizca para zoom" / "Arrastra para mover."
- [ ] **"Explicar con CBas" tooltip is mouse-only** — The highlight-to-explain feature uses `mouseup`/`mousedown` events for text selection detection. On mobile, text selection works via long-press and the Selection API events differ. Need to add `selectionchange` event listener for mobile. Also, the tooltip positioning (`fixed` based on `getBoundingClientRect`) may go offscreen on mobile — needs viewport bounds clamping.

---

## 3. HIGH — Touch Targets Too Small (< 44px)

Apple and Google recommend minimum 44×44px / 48×48dp for touch targets.

| Component | Element | Current Size | Fix |
|-----------|---------|-------------|-----|
| `Quiz.tsx` | Navigation dots | `w-3 h-3` (12px) | Increase to `w-6 h-6` (24px) with larger tap area wrapper or minimum `min-w-[44px] min-h-[44px]` |
| `Quiz.tsx` | Ordering up/down buttons | `p-1` (~24px) | Increase to `p-2.5` minimum |
| `Footer.tsx` | Social media icons | `w-10 h-10` (40px) | Increase to `w-11 h-11` (44px) |
| `EducationNavbar.tsx` | Mobile toggle button | No explicit size | Add `p-2` minimum (currently just icon) |
| `Navbar.tsx` | Mobile toggle button | Just icon, no padding | Add `p-2` for larger tap area |
| `LessonView.tsx` | Prev/Next arrows in top nav | `p-2` (36px total) | Good enough, but borderline |
| `LessonView.tsx` | Lightbox zoom/close controls | `p-2` (36px) | Increase to `p-3` on mobile |

---

## 4. HIGH — Excessive Spacing on Mobile

Many sections use desktop-sized padding/gaps that waste precious screen real estate on phones.

| Component | Property | Current | Recommended |
|-----------|----------|---------|-------------|
| `Hero.tsx` | Section padding | `pt-32 pb-20` | `pt-24 pb-12 lg:pt-32 lg:pb-20` |
| `Hero.tsx` | Stats gap | `gap-6 md:gap-12` | Already responsive, good |
| `Hero.tsx` | Button margin bottom | `mb-20` | `mb-12 lg:mb-20` |
| `Features.tsx` | Section padding | `py-32` | `py-16 lg:py-32` |
| `Features.tsx` | Content gap | `gap-20` | `gap-10 lg:gap-20` |
| `Courses.tsx` | Section padding | `py-24` | `py-16 lg:py-24` |
| `EducationPage.tsx` | Premium section padding | `p-12 md:p-20` | `p-6 sm:p-12 md:p-20` |
| `EducationPage.tsx` | Premium section rounding | `rounded-[3rem]` | `rounded-2xl sm:rounded-[3rem]` |
| `EducationPage.tsx` | Achievements section padding | `py-24` | `py-12 lg:py-24` |
| `LevelCard.tsx` | Card padding | `p-10` | `p-6 sm:p-10` |
| `Quiz.tsx` | Content padding | `p-8` | `p-4 sm:p-8` |
| `Certificate.tsx` | Certificate padding | `p-8 md:p-12` | `p-4 sm:p-8 md:p-12` |
| `LandingPage.tsx` | Newsletter section | `py-24` | `py-12 lg:py-24` |

---

## 5. MEDIUM — Missing Mobile UX Patterns

### a) No `active:` states for touch feedback
Across the entire codebase, buttons use `hover:` for visual feedback, but on touchscreens there's no hover. Need to add `active:` states (e.g. `active:scale-95`, `active:bg-slate-700`) to key interactive elements so users get instant tactile feedback when tapping.

**Key files:** `Hero.tsx`, `Courses.tsx`, `Features.tsx`, `LevelCard.tsx`, `LevelDetail.tsx`, `EducationPage.tsx`, `Footer.tsx`

### b) Mobile menu has no transition animation
**File:** `Navbar.tsx` — The mobile menu just appears/disappears with `{isMobileMenuOpen && ...}`. Should use `framer-motion` (already imported in the project) for a smooth slide-down or fade animation.

**File:** `EducationNavbar.tsx` — Same issue, plus the mobile menu is `absolute` positioned as a dropdown which can get scrolled away. Should be a proper fixed overlay.

### c) Body scroll not locked when mobile menu is open
**File:** `Navbar.tsx` — When the full-screen mobile menu opens, the page behind can still scroll. Should set `document.body.style.overflow = 'hidden'` when menu is open (like the lightbox already does).

### d) AuthModal scroll on small screens
**File:** `AuthModal.tsx` — The modal uses `items-center justify-center` in a fixed container. On very small screens or when the keyboard opens, the modal content may be taller than the viewport and can't be scrolled. Should add `overflow-y-auto` to the modal container.

### e) Sticky header stacking in LessonView
**File:** `LessonView.tsx` — The lesson has both `EducationNavbar` (`sticky top-0 z-40`) and its own nav bar (`sticky top-0 z-40`), plus a progress bar at `fixed top-16 z-30`. On mobile, this means ~128px of fixed headers eating into content space. Consider collapsing or hiding the secondary nav on scroll, or combining them.

### f) Prose content overflow
**File:** `LessonView.tsx` — The `prose prose-invert prose-lg` wrapper doesn't have `overflow-wrap: break-word` or `word-break: break-word`. Long URLs, code blocks, or unbroken text in lesson content could cause horizontal scroll. Add `break-words` class or set `overflow-x: auto` on code blocks.

---

## 6. NICE-TO-HAVE — Polish & Performance

### a) Safe area insets for modern phones
No component accounts for the notch/Dynamic Island (top) or home indicator (bottom) on newer iPhones. Add to the root layout:
```css
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
```

### b) No responsive images
All `<img>` tags use a single `src` without `srcset` or `<picture>`. For mobile data savings and performance, lesson images and the hero banner should serve smaller versions on mobile.

### c) PWA manifest missing
Despite a PWA commit (`67bd273`), there's no `manifest.json` in `/public/`. Need to verify if the PWA setup was fully completed or partially reverted. A proper PWA manifest improves mobile experience with:
- Add-to-homescreen capability
- Splash screen
- Standalone display mode
- Theme color matching the navy design

### d) `theme-color` meta tag missing
`index.html` lacks `<meta name="theme-color">`. Adding `<meta name="theme-color" content="#020617">` would color the browser chrome on mobile to match the navy background.

### e) Large decorative blobs may hurt mobile performance
`Hero.tsx` has gradient blobs with `w-[1200px]` and `blur-[160px]`. These large blur effects can cause GPU memory pressure on lower-end phones. Consider reducing the size or hiding them on mobile with `hidden lg:block`.

### f) Google Fonts loading
The fonts load via a render-blocking `<link>` in `<head>`. Consider using `<link rel="preload">` for the font CSS or self-hosting the fonts for better First Contentful Paint on mobile networks.

### g) Certificate not mobile-optimized
`Certificate.tsx` uses `min-h-[600px]` and a side-by-side footer layout that gets cramped on phones. The print button is positioned at `-top-12 right-0` which may be offscreen. Should stack the footer vertically and ensure buttons are visible on mobile.

---

## Priority Order for Implementation

1. **Chat full-screen on mobile** (biggest user impact)
2. **Touch targets** (accessibility requirement)
3. **Excessive spacing reduction** (immediate visual improvement)
4. **Active states for touch feedback** (feels more responsive)
5. **Lightbox touch support** (feature currently broken on mobile)
6. **Text selection / AI tooltip on mobile** (feature broken on mobile)
7. **Mobile menu animations & scroll lock**
8. **AuthModal scroll fix**
9. **Sticky header consolidation**
10. **Safe area insets**
11. **Theme-color meta tag**
12. **Performance optimizations (blobs, fonts, images)**
13. **PWA manifest completion**
14. **Certificate mobile layout**
