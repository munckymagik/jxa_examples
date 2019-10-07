#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true

// The System Events scripting addition for the System Events application
const SysEvents = Application("System Events")

// Property List Suite
// https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/WorkwithPropertyListFiles.html#//apple_ref/doc/uid/TP40016239-CH66-SW1
// https://stackoverflow.com/questions/31579287/use-javascript-for-automation-jxa-to-create-a-plist

let plItem = SysEvents.PropertyListItem({
  kind: 'string',
  name: 'myString',
  text: 'My String',
  value: 'this is a string',
})

for (let key in plItem) {
  console.log(key, ":", plItem[key])
}

// TODO: Couldn't get this to actually include the pl item

let plFile = SysEvents.PropertyListFile({
  // Seems to need to be a full path
  name: '/Users/danm/Work/notes_archive/demo.plist',
  contents: plItem
})

plFile.make()
