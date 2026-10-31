# Open Questions & TODO(spec)

Captured from astralune.cv design system analysis:

1. **Header positioning (`position`)**
   - Marker: `TODO(spec): header position (sticky, fixed, or scrolls away)`
   - Detail: Whether the header is sticky, fixed, or scrolls away was not observable in a static capture. Left at standard flow/sticky with token values.

2. **Interactive States for Buttons (active/pressed, disabled)**
   - Marker: `TODO(spec): button active/pressed and disabled styles`
   - Detail: Active/pressed and disabled states were not observable from a static capture. Derived using opacity and token border colors.

3. **Motion Interaction Triggers**
   - Marker: `TODO(spec): motion trigger choreography for keyframes (moveClouds, speeder, etc.)`
   - Detail: Transition/animation durations and easings were measured from computed styles, but their triggering actions were not simulated in the static capture.

4. **Data Persistence Strategy on Serverless**
   - Marker: `TODO(spec): storage backend for /idch.json in production (e.g. Vercel KV, Blob, or GitHub API)`
   - Detail: Local updates work in-memory and client localStorage; production Vercel serverless functions are stateless, manual WhatsApp verification flow by Admin (62895639043495) handles permanent additions.

