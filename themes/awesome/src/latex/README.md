# Awesome CV
*A template-friendly fork of Byungjin Park's [Awesome-CV][awe] resume template.*

This fork replaces each occurrence of hard-coded resume data in the original
Awesome-CV project with an expandable template tag, allowing you to generate a
personalized copy of Awesome-CV without hand-editing the `.tex` files.

Otherwise, it's identical to the original.

## Use

When expanded with [Underscore.js][und] and a [FRESH resume][fre] object (JSON),
this project yields an Awesome-CV template, in LaTeX, but with your resume data.
You can then use a tool like `xelatex` or similar to generate the final PDF.

**Step 1**: Use a FRESH-aware template expansion tool like [HackMyResume][hmr]
to generate the personalized LaTeX:

```bash
hackmyresume build resume.json -t awesome
```

**Step 2**: Use conventional LaTeX tools to generate a PDF or other destination
format from the (personalized) Awesome-CV LaTeX files:

```bash
xelatex examples/resume.tex
```

**Step 3**: When you need to update your resume, update the source JSON, and
re-generate destination formats as needed.

## Notes

- This project is intermittently synced with the upstream master to get the
benefit of any new changes or tweaks.

- The template tags are based on the Underscore.js template syntax but with a
modified set of template delimiters that reduce conflicts with LaTeX
metacharacters such as `{` or `%`.

- Underscore.js was chosen because its minimalistic template engine supports
custom delimiters (Handlebars [doesn't][hb350], except [unofficially][un]) and
allows execution of arbitrary JavaScript in the template.

- This project indirectly drives the `awesome` theme in HackMyResume and
FluentCV. Technically the latter is a fork of this project, which itself is a
fork of the original Awesome-CV for LaTeX.

## License

See the original project for license information.

[awe]: https://github.com/posquit0/Awesome-CV
[hmr]: http://please.hackmyresume.com
[fre]: http://freshstandard.org
[und]: http://underscorejs.org/#template
[hb350]: https://github.com/wycats/handlebars.js/issues/350
[un]: https://github.com/jonschlinkert/handlebars-delimiters
