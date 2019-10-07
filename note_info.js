#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true
app.strictPropertyScope = true
app.strictCommandScope = true
app.strictParameterType = true

const noteInfo = (note) => {
  console.log("## Note:", note.name())
  console.log("* ID:", note.id())
  console.log("* Password protected:", note.passwordProtected())
  console.log("* Container:", note.container().name())
  console.log("* Body:", note.body())
  console.log()
}

function run(args) {
  if (args.length !== 1) {
    console.log("USAGE note_name")
    return
  }

  const Notes = Application("Notes")
  const noteName = args[0]

  const note = Notes.notes.byName(noteName)()
  noteInfo(note)
}
