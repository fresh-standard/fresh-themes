Theme: Awesome
==============
An experimental FluentCV theme based on the [Awesome-CV][acv] resume
template for LaTeX.

## Use

1. Run `fluentcv build my-resume.json to out/my-resume.all -t awesome` to create
a LaTeX resume in the Awesome-CV style using your FRESH or JSON Resume resume.

2. Generate a styled PDF by running `xelatex my-resume.tex` in the `examples`
folder generated in Step 1. You'll need a valid and updated LaTeX environment on
your local machine, such as [MiKTeX 2.9.5721][m].

## Warning

For this theme to work the same way the original Awesome-CV theme works, there
are 3 symlinks in the `examples` folder that need to exist:

- `awesome-cv.cls` should link to `../awesome-cv.cls`.
- `fontawesome.sty` should link to `../fontawesome.sty`.
- `fonts` should link to `../fonts` (folder).

FluentCV creates these by default when it generates a resume under the `awesome`
theme. To create these symlinks manually, either use the Linux / OS X symlink
command for all three or, if on Windows, run use `mklink /H` for the first two
and `mklink /J` for the last.

## License

Themes are licensed under MIT. See [LICENSE.md][lic].


[acv]: https://github.com/posquit0/Awesome-CV
[m]: http://miktex.org/download
[desk]: http://fluentcv.com
[cli]: https://github.com/fluentdesk/fluentcv
[lic]: https://github.com/fluentdesk/fluent-themes/blob/master/LICENSE.md
