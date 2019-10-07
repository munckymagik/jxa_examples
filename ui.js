#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true

// UI comes from the "Standard Additions" "User Interactions"
const choices = app.chooseFolder({
  // the prompt to be displayed in the dialog box
  withPrompt: "",
  // the default folder location
  defaultLocation: app.pathTo("home folder"),
  // Show invisible files and folders ? (default is false)
  invisibles: true,
  // Allow multiple items to be selected ? (default is false)
  multipleSelectionsAllowed: true,
  // Show the contents of packages ? (Packages will be treated as folders.Default is false.)
  showingPackageContents: true,
})

console.log("choices")
console.log(choices.join(":"))
