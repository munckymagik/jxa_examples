#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true

/*
 * Writes text to a file using the "Standard Additions" scripting addition
 * facilities.
 *
 * Note: does not handle UTF-8 encoded text
 */
const writeTextToFile = (text, file, overWriteExistingContent) => {
  try {
    const fileString = file.toString()

    const openedFile = app.openForAccess(
      Path(fileString),
      { writePermission: true }
    )

    if (overWriteExistingContent) {
      app.setEof(openedFile, { to: 0 })
    }

    app.write(text, { to: openedFile, startingAt: app.getEof(openedFile) })
    app.closeAccess(openedFile)

    return true
  } catch (error) {
    console.log(error)

    try {
      app.closeAccess(openedFile)
    } catch (error) {
      console.log(`Could not close file ${error}`)
    }

    return false
  }
}

function writeFileUTF8(path, utf8Text) {
  var nsStr = $.NSString.alloc.initWithUTF8String(utf8Text)
  var nsPath = $(path).stringByStandardizingPath
  return nsStr.writeToFileAtomicallyEncodingError(nsPath, false, $.NSUTF8StringEncoding, null)
};

const text = "Something to say ✅\n"

// pathTo comes from the "Standard Additions"
const rootPathString = app.pathTo("home folder").toString()
const file = `${rootPathString}/Work/notes_archive/my story.txt`
// writeTextToFile(text, file, false)
writeFileUTF8(file, text)
