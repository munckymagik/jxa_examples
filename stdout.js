#!/usr/bin/osascript -l JavaScript

/*
 * Modifies console so console.log outputs to the stdout. Moves the original
 * console.log to console.error.
 *
 * Doesn't work in the Script Editor which only pays attention to the original
 * function and the final value returned from the script.
 *
 * See: https://stackoverflow.com/questions/48199694/how-to-write-to-standard-data-out-using-javascript-or-applescript-multiple-times
 *
 * $ ./stdout.js
 * stdout 1,2,3 [object Object] 😀
 * stderr 1,2,3 [object Object] 😀
 * $ ./stdout.js 2>/dev/null
 * stdout 1,2,3 [object Object] 😀
 * $ ./stdout.js 1>/dev/null
 * stderr 1,2,3 [object Object] 😀
 */

const app = Application.currentApplication()
app.includeStandardAdditions = true

console.error = console.log
console.log = (...args) => {
  let output = `${args.join(' ')}\n`
  let nsOutput = $.NSString.stringWithString(output)
  let encodedOutput = nsOutput.dataUsingEncoding($.NSUTF8StringEncoding)
  $.NSFileHandle.fileHandleWithStandardOutput.writeData(encodedOutput)
}

const obj = {
  i_am: 'an object'
}
const arr = [1, 2, 3]

console.log("stdout", arr, obj, "😀")
console.error("stderr", arr, obj, "😀")
