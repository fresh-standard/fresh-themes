fresh-themes/assets/partials
============================
This folder contains global partials available to all FRESH themes. A global
partial is a reusable fragment of HTML, XML, or other markup that can be
injected into your theme.

## Use

To load a global partial, use the following syntax in your theme:

```hbs
{{> section/[section-name] }}
```

For example:

```hbs
{{> section/employment }}
{{> section/projects }}
{{> section/employment }}
```

Currently two types of global partials are available:

- Section partials (DOC and HTML formats) that represent a specific resume
section.
- Icon partials for DOC formats that make it a bit easier to embed images in
the MS Word resume format.

Many more will be supported in the future.

## Overriding

Themes can also declare theme-specific partials located in the theme's
`/partials` folder (if any).
