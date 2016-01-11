fresh-themes
============

*Stylized templates for your résumé and/or CV, compatible with [FRESH][f] and
(through conversion) [JSON Resume][jrs] formats.*

- [positive][t-positive]: A visually dense/compact theme.
- [modern][t-modern]: A middle of the road theme with a modern look 'n feel.
- [compact][t-compact]: A visually dense/compact theme.
- [awesome][t-awesome]: A technical resume theme based on [Awesome-CV][awe].
- [underscore][t-underscore]: An unstyled barebones theme.
- [hello-world][t-hello]: A simple-as-possible example theme.
- New themes weekly.

## Use

1. Install [HackMyResume][hmr] or a similar tool.

2. Create a [FRESH][f] or [JRS][jrs] résumé.

3. Run `hackmyresume build <your-resume.json> to <final-resume>.all -t
<theme-name>` to generate all formats for a particular theme. For example:

    ```bash
    hackmyresume BUILD resume.json TO out/resume.all -t positive
    ```

## Install

The **fresh-themes** repo is automatically installed when you install
HackMyResume. For development or testing purposes, you can install the
standalone version via NPM:

`[sudo] npm install fresh-themes [--save]`

...or fork and clone it from GitHub as usual.

## How It Works

FRESH themes are powered by the same templates you're familiar with from Jekyll,
Handlebars, MS Word, or your server-side web language of choice. You create a
FRESH theme the same way you would any other template: by intermixing markup
(HTML, XML, plain text, whatever) with special tags or placeholders:

```html
<h3>{{ job.title }}</h3>
<p>{{ job.summary }}</p>
```

Run it through a tool, and you get finished markup suitable for display or
saving as a document:

```html
<h3>Ninja</h3>
<p>Performed covert ops in feudal Japan.</p>
```

The only difference between a FRESH theme and your Jekyll blog or MS Word
template is that FRESH themes are:

- **Multiformat**. Each FRESH theme can declare multiple formats: HTML, Word,
PDF, Markdown, or other future formats.
- **Markdown-friendly**. All FRESH themes support inline Markdown/HTML
formatting.
- **Inheritable**. FRESH themes can inherit or "borrow" formats from other
themes.
- **Agnostic**. FRESH themes don't mandate that you use a particular templating
engine or style: you can use Handlebars, Underscore, or other engines in the
future.

If you can do `{{ r.name }}` or `{% highlight html %}` in a template file you can work with FRESH themes.

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

Contributions are welcome.

1. Fork, branch, and clone this repository.
2. Add or edit a theme or make other changes.
3. Submit a PR.

## License

MIT. See [LICENSE.md][1] for details.

[1]: http://fluentcv.com
[2]: https://github.com/fluentdesk/fluentcv
[3]: https://github.com/fluentdesk/fresh-themes/blob/master/LICENSE.md
[f]: https://github.com/fluentdesk/FRESCA
[jrs]: http://jsonresume.org
[awe]: https://github.com/posquit0/Awesome-CV
[t-awesome]: https://github.com/fluentdesk/fresh-themes/tree/master/themes/awesome
[t-underscore]: https://github.com/fluentdesk/fresh-themes/tree/master/themes/minimist
[t-modern]: https://github.com/fluentdesk/fresh-themes/tree/master/themes/modern
[t-hello]: https://github.com/fluentdesk/fresh-themes/tree/master/themes/hello-world
[t-compact]: https://github.com/fluentdesk/fresh-themes/tree/master/themes/compact
[t-positive]: https://github.com/fluentdesk/fresh-themes/tree/master/themes/positive
[hmr]: https://github.com/hacksalot/hackmyresume
