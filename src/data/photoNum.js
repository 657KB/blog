const fs = require('fs')
const path = require('path')

module.exports = () => {
  const directoryPath = path.join(__dirname, '../images/photos')
  const files = fs.readdirSync(directoryPath)
  return files.length
}

