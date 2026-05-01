
## Goal

On mobile only, make the pain-point cards in the "Does This Sound Familiar?" section auto-expand based on scroll position. As the user scrolls down, the next card grows into the large/expanded state; the previous one collapses back to its small teaser state. Scrolling up reverses the effect. Desktop behavior is unchanged.

## Current behavior (mobile)

- All 6 cards are stacked vertically.
- A card only expands when tapped (`onClick` toggles `active`).
- Default state: only card 0 is expanded; the rest are collapsed teasers.
- Each card already has a scroll-in scale/fade effect from the previous step (will be kept).

## New behavior (mobile)

- No tap required. The card whose center is closest to the viewport's vertical center becomes the `active` (expanded) one automatically.
- As the user scrolls down, card 1 → 2 → 3 → 4 → 5 → 6 sequentially expand and the previous collapses.
- Scrolling up reverses it (e.g. 4 → 3 → 2).
- Tap still works as a manual override.
- Desktop: unchanged (hover-driven, no scroll auto-expansion).

## Implementation (`src/components/sections/PainPoints.tsx`)

1. Add a ref array (`panelRefs`) attached to each panel's outer wrapper element.
2. On mobile, attach a single scroll listener (rAF-throttled) that:
   - Computes the viewport center (`window.innerHeight / 2`).
   - For each panel ref, gets `getBoundingClientRect()` and finds the one whose vertical center is closest to the viewport center.
   - Calls `setActive(closestIndex)` if it changed.
3. Run the same logic once on mount (and on resize) so the initial active card matches the scroll position.
4. Keep existing tap behavior — tapping still sets `active`. Subsequent scrolling will overwrite it, which is the desired UX.
5. Forward the ref through `MobileScrollPanel` (using `React.forwardRef`) so the parent can measure each panel.
6. Desktop path stays driven by hover (`useTap === false`); we only enable the scroll listener when `isMobile` is true.

## Technical notes

- Use `requestAnimationFrame` to throttle scroll handling and avoid layout thrash.
- Add the listener with `{ passive: true }`.
- Clean up on unmount and when `isMobile` flips.
- The expanded card height is already `400px` and collapsed `200px`; the existing CSS transition on `height` will animate the swap smoothly.
- No changes to desktop logic, styles, or any other section.
