# Peer-review technical issue response — November 12, 2026

This log separates **confirmed source-code facts** from **unverified browser behavior**.

## Search bar
- The site uses VitePress built-in local search (`search: { provider: 'local' }`).
- The reported `Search K` may be the standard search keyboard shortcut label, not a rendering error. A browser test is needed before treating it as a defect.
- **Manual verification:** Click Search; search for "AI Engineer"; confirm a result appears and opens the intended page. Test on desktop and phone.

## Navigation
The source files for these routes exist:
- [Compare Roles](/career-map)
- [My Roadmap](/roadmap)
- [Sources](/resources)

The VitePress config uses the matching root-relative routes and a GitHub Pages base of `/ai-career-research/`. This is a **code-level check only**, not a claim that all links work in the live deployment.

**Manual verification:** Open each navigation link from the homepage and from an inner page; confirm the page loads without a 404. Also test sidebar links.

## Responsive design and CSS
- Added word wrapping and responsive media handling to the custom theme CSS.
- Added horizontal overflow support for code and table wrappers.
- Reduced hero letter spacing and table cell minimum widths on small screens.
- Respected reduced-motion preferences by disabling hover motion.

**Manual verification:** Test viewport widths 375, 768, and 1280 px. Check that headings, table content, buttons, and sidebar do not overlap. Large tables may need horizontal scrolling.

## Appearance button
- Changed VitePress `appearance` from a fixed dark default to `true`, which enables its built-in theme switcher.
- VitePress is responsible for saving the user's theme preference; persistence still requires browser testing.

**Manual verification:** Switch to light mode, open Compare Roles, refresh, and confirm that the selected mode remains. Repeat for dark mode.

## JavaScript and console
- No custom interactive JavaScript was found in `docs/.vitepress/theme/index.ts`; the site uses VitePress's default theme and its built-in search/navigation.
- Console output has **not** been inspected. Do not claim there are zero JavaScript errors.

**Manual verification:** Open browser Developer Tools → Console, click navigation links, open search, change appearance, and record any red errors. Use the Network panel to inspect failed assets.

## Review status
| Item | Code review | Browser verification |
| --- | --- | --- |
| Search | Built-in local search configured | Pending |
| Navigation | Three target Markdown files exist | Pending |
| Mobile and CSS | Improvements committed | Pending |
| JavaScript | No custom theme scripts found | Pending |
| Appearance | Enabled built-in theme switching | Pending |

**Peer-review trace:** Source changes are documented in GitHub commits. If your classmate has filed actual GitHub issues, reference their issue numbers in a follow-up commit or comment; do not mark them closed before testing.
