const app = Application.currentApplication()
app.includeStandardAdditions = true
app.strictPropertyScope = true
app.strictCommandScope = true
app.strictParameterType = true

const reflect = (obj) => {
  console.log(obj.name)
  console.log(obj.constructor.name)
  console.log(typeof obj)
  console.log(ObjectSpecifier.classOf(obj))
  Array.from(Object.getOwnPropertyNames(obj))
    .sort()
    .forEach(k => console.log(`  ${k}`));
}

// reflect(this);
// reflect(Path);
reflect($.NSFileManager.defaultManager);

// let x = Path('/')
// reflect(x)
// console.log(x);
