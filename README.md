fluent-themes
=============
Resume themes for [FluentCV][1] and [FluentCMD][2].

- `minimist`: A no-frills theme.
- `modern`: A middle of the road theme with a modern look 'n feel.
- `hello-world`: A simple-as-possible example theme.
- New themes forthcoming.

## How It Works

Each theme lives in a folder, e.g., `themes/informatic` or `themes/modern`. The folder contains individual template files assembled by the theme author. Each template can be used to generate a single type of output file such as HTML, Word, or PDF. Template files are named according to this scheme...

    [ OuputFormat ].[ InputFormat ]

...where `[OuputFormat]` and `[InputFormat]` are both one of `html`, `pdf`, `md`, `txt`, `doc`, or `xml`. For example:

- `html.html` = An HTML template used to generate an HTML document.
- `doc.xml` = An XML template used to generate an MS Word document.
- `pdf.html` = An HTML template used to generate a PDF document.
- `md.txt` = A text template used to generate a Markdown document.

This scheme ensures that theme template files have the "correct" file extension when the theme author is working with them in an editor&mdash;if your source data is XML then the template file will have an `.xml` extension regardless of whether you're ultimately generating an HTML page or a PDF document *from* that XML. It also provides a declarative mapping between a given input format (say, XML) and a given output file type (say, a Word doc or spreadsheet).

## License

MIT. See [LICENSE.md][1] for details.

[1]: http://fluentcv.com
[2]: https://github.com/fluentdesk/fluentcmd
[3]: ../LICENSE.md
