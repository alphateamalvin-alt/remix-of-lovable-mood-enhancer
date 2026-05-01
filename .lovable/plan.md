
## Goal

On mobile, hide the "ordered ..." social-proof toast while the hero section is on screen, and shrink the toast slightly so it doesn't feel oversized. Desktop is unchanged.

## Changes — `src/components/SocialProofToast.tsx`

1. **Hide on hero (mobile only):**
   - Add `heroInView` state, set via an `IntersectionObserver` on `#top` (the hero `<section>`).
   - In the render guard, return `null` when `isMobile && heroInView`.
   - Desktop continues to show the toast everywhere as today.

2. **Smaller mobile size:**
   - Mobile `maxWidth`: `240` → `210`.
   - Mobile padding: `14px 16px` → `10px 12px`.
   - Mobile thumbnail: `48 × 48` → `38 × 38`; `gridTemplateColumns: "48px 1fr 24px"` → `"38px 1fr 20px"`.
   - Mobile font sizes:
     - Name line `13` → `12`.
     - Product line `11` → `10`.
     - Time/verified line `10` → `9`.
   - Close button `24 × 24` → `20 × 20`, font `12` → `11`.
   - Desktop sizes unchanged (use `isMobile` ternaries for each value).

3. No change to rotation timing, position logic, or copy.

## Notes

- IntersectionObserver is created once in a `useEffect`; if `#top` isn't found (e.g. shop/checkout pages), `heroInView` stays `false` so the toast still shows.
- Toast remains hidden on `/checkout` (existing logic).
