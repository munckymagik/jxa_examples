#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true
app.strictPropertyScope = true
app.strictCommandScope = true
app.strictParameterType = true

const shellPwd = () => {
  return app.doShellScript("pwd")
}

function writeFileUTF8(path, utf8Text) {
  var nsStr = $.NSString.alloc.initWithUTF8String(utf8Text)
  var nsPath = $(path).stringByStandardizingPath
  return nsStr.writeToFileAtomicallyEncodingError(nsPath, false, $.NSUTF8StringEncoding, null)
};

const toHtml = (note) => `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${note.name()}</title>
</head>
<body>
  <h1>${note.name()}</h1>
  <header>
    <pre>
    * ID: ${note.id()}
    * Password protected: ${note.passwordProtected()}
    * Container: ${note.container().name()}
    </pre>
  </header>
  <main>
  ${note.body()}
  </main>
</body>
</html>
`

function run(args) {
  if (args.length !== 2) {
    console.log("USAGE note_name out_html_file_name")
    return
  }

  const Notes = Application("Notes")
  const noteName = args[0]
  const outFileName = args[1]

  const note = Notes.notes.byName(noteName)()
  const html = toHtml(note)

  writeFileUTF8(outFileName, html)
}
