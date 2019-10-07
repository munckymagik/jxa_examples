#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true
app.strictPropertyScope = true
app.strictCommandScope = true
app.strictParameterType = true

const appInfo = (Notes) => {
  console.log("# App\n")
  console.log("* Name:", Notes.name())
  console.log("* Version:", Notes.version())
  console.log("* Count of accounts:", Notes.count(Notes.accounts))
  console.log("* Count of notes:", Notes.count(Notes.notes))
  console.log("* Count of folders:", Notes.count(Notes.folders))
  console.log("* Count of attachments:", Notes.count(Notes.attachments))
  console.log()
}

const accountsInfo = (Notes) => {
  console.log("# Accounts\n")
  for (let account of Notes.accounts()) {
    console.log("## Account:", account.name())
    console.log("* ID:", account.id())
    console.log("* Default folder:", account.defaultFolder().name())
    console.log("* Upgraded:", account.upgraded())
    console.log()
  }
}

const foldersInfo = (Notes) => {
  console.log("# Folders\n")
  for (let folder of Notes.folders()) {
    console.log("## Folder:", folder.name())
    console.log("* ID:", folder.id())
    console.log("* Container:", folder.container().name())
    console.log()
  }
}

const notesInfo = (Notes) => {
  console.log("# Notes\n")
  for (let note of Notes.notes()) {
    console.log("## Note:", note.name())
    console.log("* ID:", note.id())
    console.log("* Password protected:", note.passwordProtected())
    console.log("* Container:", note.container().name())
    console.log()
  }
}

const attachmentsInfo = (Notes) => {
  console.log("# Attachments\n")
  for (let attachment of Notes.attachments()) {
    console.log("## Attachment:", attachment.name())
    console.log("* ID:", attachment.id())
    console.log("* Content identifier:", attachment.contentIdentifier())
    console.log("* Container:", attachment.container().name())
    console.log()
  }
}

function run(_args) {
  const Notes = Application("Notes")
  appInfo(Notes)
  accountsInfo(Notes)
  foldersInfo(Notes)
  // notesInfo(Notes)
  attachmentsInfo(Notes)
}
