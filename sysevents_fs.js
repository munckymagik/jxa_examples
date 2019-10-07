#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true

// The System Events scripting addition for the System Events application
const SysEvents = Application("System Events")

// Disk-Folder-File Suite
const homeFolder = SysEvents.homeFolder()

// folder inherits from disk item
console.log("name:", homeFolder.name())
console.log("id:", homeFolder.id())
console.log("creation date:", homeFolder.creationDate())
console.log("path:", homeFolder.path())
console.log("POSIX path:", homeFolder.posixPath())
console.log("URL:", homeFolder.url())
console.log("container:", homeFolder.container().posixPath())

// Expensive, returns logical space used
// console.log("size:", homeFolder.size())
// Expensive, returns actual space used
// console.log("physical size:", homeFolder.physicalSize())
// Also didn't seem to cancel the task in the server even after ctrl+c

// https://github.com/JXA-Cookbook/JXA-Cookbook/wiki/User-Interaction-with-Files-and-Folders#get-a-list-of-folder-contents
let contents = SysEvents.folders.byName("/usr").diskItems.name()
console.log(contents)
