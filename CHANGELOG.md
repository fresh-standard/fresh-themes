CHANGELOG
===

## v0.17.0-beta (2018-02-07)

*This interim release adds cosmetic and content improvements to the Positive,
Modern, and Compact themes along with minor updates to the helpers-and-partials infrastructure for theme developers.*

### Theme: Positive

- Improved cosmetics.
- Added EXTRACURRICULAR section.
- Added `location` field (when present) on EMPLOYMENT, EDUCATION, & AFFILIATION
sections.
- Created [standalone version of Positive theme][1].
- Roll up the REFERENCES section into a "references available upon request"
message at the bottom of the resume.
- Updated PDF format from HTML.

### Theme: Modern

- Improved cosmetics.
- The SKILLS section now displays the number of years associated with each skill,
since this is a common metric asked for by HR personnel and recruiters.
- Added EXTRACURRICULAR section.
- Updated PDF format from HTML.

### Theme: Compact

- Added EXTRACURRICULAR section.
- Updated PDF format from HTML.

### Custom Themes

- Added reusable EXTRACURRICULAR partial (all formats).
- Added two minor skill-related template helpers, `ifHasSkill` and `skillYears`.
- HackMyResume: Fixed issue that would prevent custom FRESH themes from loading
if the theme folder contained uppercase characters.
- HackMyResume: Fixed issue that would prevent custom FRESH themes from loading
if they inherited from a predefined theme but didn't themselves live in the
`fresh-themes` repository.

### Other

- Introduced CHANGELOG.md (this file).
- Changed release notes format. Instead of the conventional
`Added / Changed / Fixed` structure, changes are grouped under each theme,
making it easier to track theme-specific changes from release to release.


## Previous Releases

See [/fresh-themes/releases][2] for previous releases.

[1]: https://github.com/fresh-standard/fresh-theme-positive
[2]: https://github.com/fresh-standard/fresh-themes/releases
