const fs = require('fs')
const path = './gulp/tasks'
const arrayFiles = fs.readdirSync(path)
.map(name=>name = `${path}/${name}`)

module.exports = arrayFiles