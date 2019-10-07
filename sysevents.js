#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true

// The System Events scripting addition for the System Events application
const SysEvents = Application("System Events")
console.log("Name:", SysEvents.name())
console.log("Version:", SysEvents.version())

// System Events Suite terms
console.log("scriptMenuEnabled:", SysEvents.scriptMenuEnabled())

// Accounts Suite
for (let user of SysEvents.users()) {
  console.log("*", user.name(), ",", user.fullName(), ",", user.homeDirectory())
}
console.log("Current user: ", SysEvents.currentUser().name())

// Appearance Suite
console.log("Darkmode?", SysEvents.appearancePreferences().darkMode())

// Login Items
console.log("Login Items:")
for (let loginItem of SysEvents.loginItems()) {
  console.log("*", loginItem.name(), loginItem.kind(), loginItem.path())
}
