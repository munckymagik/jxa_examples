#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true

// pathTo comes from the "Standard Additions"
console.log("home folder", app.pathTo("home folder"));
console.log("this", app.pathTo(this));
