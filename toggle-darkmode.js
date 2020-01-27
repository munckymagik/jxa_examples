#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true

const SysEvents = Application("System Events")

const current = SysEvents.appearancePreferences().darkMode()
SysEvents.appearancePreferences().darkMode = !current
