#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true

// https://github.com/JXA-Cookbook/JXA-Cookbook/wiki/Shell-and-CLI-Interactions#arguments

const shellPwd = () => {
  return app.doShellScript("pwd")
}

// Doesn't work
ObjC.import('unistd')
const cPwd = () => {
  const len = 10
  const buf = " ".repeat(len)
  $.getcwd(buf, len)
  return buf
}

function run(args) {
  console.log("shellPwd", shellPwd())
  // console.log("cPwd", cPwd())

  console.log("args", args)
}
