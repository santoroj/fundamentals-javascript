
npm init              
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (joes) examples
version: (1.0.0) 
description: Sample npm project
entry point: (chalk-colors.js) index.js
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/joesantoro/Joes/Courses/JavaScript/fundamentals-javascript/09/Joes/package.json:

{
  "name": "examples",
  "version": "1.0.0",
  "description": "Sample npm project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

vim package.json and add   "type": "module",


Is this OK? (yes) 
(venv)  joesantoro@CIC001521  09/Joes   joes ±
 ➜ npm install chalk --save

added 1 package, and audited 2 packages in 828ms

1 package is looking for funding
  run `npm fund` for details

found 0 vulnerabilities

#   node index.js 
