#!/usr/bin/osascript -l JavaScript

const app = Application.currentApplication()
app.includeStandardAdditions = true
app.strictPropertyScope = true
app.strictCommandScope = true
app.strictParameterType = true

const files = [
  { name: "A thing happened", folder: "Folder1"},
  { name: "B thing happened", folder: "Folder1"},
  { name: "C thing happened", folder: "Folder1"},
  { name: "A thing happened", folder: "Folder2" },
  { name: "B thing happened", folder: "Folder2" },
  { name: "C thing happened", folder: "Folder2" },
]

function writeFile(pPathStr, pOutputStr) {
  var nsStr = $.NSString.alloc.initWithUTF8String(pOutputStr)
  var nsPath = $(pPathStr).stringByStandardizingPath
  return nsStr.writeToFileAtomicallyEncodingError(nsPath, false, $.NSUTF8StringEncoding, null)
};

function createFolderIfNotExists(folderPath) {
  const fm = $.NSFileManager.defaultManager
  let error = $();
  fm.createDirectoryAtPath(folderPath, true, $(), error)

  if (!error.isNil()) {
    throw new Error(error.toString())
  }
}

const root = "archive"

const main = () => {
  const Finder = Application("Finder")

  for (let f of files) {
    let folder = `${root}/${f.folder}`
    // let path = `${folder}/${f.name}.txt`
    console.log(folder)
    createFolderIfNotExists(folder);
    // if (!writeFile(path, "hello world\n")) {
    //   throw new Error("Could not create " + path)
    // }
  }
}

main()
