const fs = require('fs')
const pug = require('pug')

function compilePugs () {
  const makeIndex = pug.compileFile('index.pug')
  fs.writeFileSync('index.html', makeIndex())
}

if (require.main === module) {
  compilePugs()
}
