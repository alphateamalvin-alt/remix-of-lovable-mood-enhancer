
## Goal

Restore the social-proof toast to its original size on mobile, and lower its vertical position on screen so it sits closer to the bottom edge.

## Changes — `src/components/SocialProofToast.tsx`

1. **Revert mobile sizing to original:**
   - `maxWidth`: `210` → `240`
   - `padding`: `"10px 12px"` → `"14px 16px"` (always)
   - `gridTemplateColumns`: `"38px 1fr 20px"` → `"48px 1fr 24px"` (always)
   - `gap`: `10` → `12` (always)
   - Thumbnail `<img>`: width/height back to `48`
   - Name font: back to `13`
   - Product font: back to `11`
   - Time/verified font + check: back to `10`
   - Close button: back to `24×24`, font `12`

2. **Lower mobile position:**
   - Mobile `bottom`: `urgencyDismissed ? 16 : 70` → `urgencyDismissed ? 8 : 40`
   - Desktop `bottom` unchanged.

3. Keep the hero-in-view hide behavior (previous step) — no change there.

## Notes

- Desktop styling untouched.
