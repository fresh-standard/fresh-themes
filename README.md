fresh-themes
============

*Stylized templates for your résumé and/or CV, compatible with [FRESH/FRESCA][f]
and (through conversion) [JSON Resume][jrs] formats.*

FRESH themes are multiformat, Markdown-aware, standards-friendly templates for
résumés, CVs, and other employment artifacts.

- **Markdown-friendly**. FRESH themes support Markdown and/or HTML formatting
*across multiple formats*. That means if you **bold something in your resume**
you will see that style reflected not just in the HTML version, but in the MS
Word version, and the PDF too.

- **Multiple output formats** including HTML, MS Word, Markdown, LaTeX, plain
text, and more.

- **Engine-agnostic**. FRESH themes can be built with Handlebars,
Underscore, and in the future, other template engines such as Liquid.

- **DRY**. FRESH themes rely on partials and theme inheritance in order to
minimize the amount of duplication and boilerplate you have to wade through
to design and/or build a modern, multiformat resume.

- **Open and unaffiliated**. Like the [FRESH/FRESCA schema][f] they're based on,
FRESH themes have no commercial or corporate backing, basis, or bias.

## Use

1. The quickest way to get started with FRESH themes is to install
[HackMyResume][hmr]. Installing this repo (fresh-themes) is not required except
for development purposes.

2. Create a [FRESH][f] or [JRS][jrs] résumé.

3. Run `hackmyresume build <your-resume.json> to <final-resume>.all -t
<theme-name>` to generate all formats for a particular theme. For example:

    ```bash
    hackmyresume BUILD resume.json TO out/resume.all -t positive
    ```

## Predefined FRESH Themes

This repository provides canonical versions of a handful of FRESH themes used
in and installed with HackMyResume. Other FRESH themes may be available on
GitHub and NPM.

- [positive][t-positive]: A visually dense/compact theme.
- [modern][t-modern]: A middle of the road theme with a modern look 'n feel.
- [compact][t-compact]: A visually dense/compact theme.
- [awesome][t-awesome]: A technical resume theme based on [Awesome-CV][awe].
- New themes weekly.

All FRESH themes in this repo are MIT licensed. You're free to change, modify,
update, or improve them at will.

## How It Works

FRESH themes are powered by the same templates you're familiar with from Jekyll,
Handlebars, MS Word, or your server-side web language of choice. You create a
FRESH theme the same way you would any other template: by intermixing markup
(HTML, XML, plain text, whatever) with special tags or placeholders:

```html
<h3>{{ job.title }}</h3>
<p>{{ job.summary }}</p>
```

Run it through a tool like HackMyResume, and you get finished markup suitable
for display or saving as a document:

```html
<h3>Ninja</h3>
<p>Performed covert ops in feudal Japan.</p>
```

The only difference between a FRESH theme and your Jekyll blog or MS Word
template is the syntax. If you can do `{{ r.name }}` or `{% highlight html %}`
in a template file you can work with FRESH themes.

For an annotated example of building a FRESH theme for multiple formats
including HTML, MS Word, and PDF, check out the Modern theme's [HTML][h] and
[DOC][d] templates.

## Structure

FRESH themes are structured to allow for flexible generation of documents in
multiple formats. Each theme lives in a separate folder and consists of:

- A JSON description file.
- One or more template files in Handlebars or Underscore format.
- Any necessary support files (CSS, LaTeX partials, etc.).
- A dedicated README.

Within its containing folder, a theme can have an arbitrary structure provided
you either a) follow a standard naming convention or b) specify your theme files
in your theme's JSON file.

## Contribute

Contributions are encouraged.

1. Fork, branch, and clone this repository.
2. Add or edit a theme or make other changes.
3. Submit a PR.
4. Ideally, target the `dev` branch with your PR.

## License

MIT. See [LICENSE.md][1] for details.

[1]: http://fluentcv.com
[2]: https://github.com/fluentdesk/fluentcv
[3]: https://github.com/fluentdesk/fresh-themes/blob/master/LICENSE.md
[f]: https://github.com/fluentdesk/FRESCA
[h]: https://github.com/fluentdesk/fresh-themes/blob/dev/themes/modern/src/modern-html.html
[d]: https://github.com/fluentdesk/fresh-themes/blob/dev/themes/modern/src/modern-doc.xml
[jrs]: http://jsonresume.org
[awe]: https://github.com/posquit0/Awesome-CV
[t-awesome]: https://github.com/fluentdesk/fresh-themes/tree/master/themes/awesome
[t-underscore]: https://github.com/fluentdesk/fresh-themes-underscore
[t-modern]: https://github.com/fluentdesk/fresh-themes/tree/master/themes/modern
[t-hello]: https://github.com/fluentdesk/fresh-themes/tree/master/themes/hello-world
[t-compact]: https://github.com/fluentdesk/fresh-themes/tree/master/themes/compact
[t-positive]: https://github.com/fluentdesk/fresh-themes/tree/master/themes/positive
[hmr]: https://github.com/hacksalot/hackmyresume
