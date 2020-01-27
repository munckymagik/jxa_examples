#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true

const Terminal = Application("Terminal")
const darkTheme = Terminal.settingsSets.byName("Dan")
const lightTheme = Terminal.settingsSets.byName("PencilLight")

let newSettings = darkTheme;
if (Terminal.defaultSettings.id() === darkTheme.id()) {
  newSettings = lightTheme
}

Terminal.defaultSettings = newSettings

for (let window of Terminal.windows()) {
  for (let tab of window.tabs()) {
    tab.currentSettings = newSettings
  }
}
