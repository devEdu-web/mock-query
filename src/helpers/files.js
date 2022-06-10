import fs from 'node:fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path'
import readline from 'readline'

const __dirname = dirname(fileURLToPath(import.meta.url));
const folderPath = path.join(__dirname, '..', '..', 'outQuery')
const filePath = path.join(__dirname, '..', '..', 'outQuery', 'query.txt')


/**
 * 
 * @param {String} path 
 * @returns Promise
 */
async function getColumnsFromCsv(path) {
  return new Promise((resolve, reject) => {

    const status = fs.statSync(path)
    if(status.size <= 0) {
      reject('File cannot be empty')
    }
    const readable = fs.createReadStream(path)
    const reader = readline.createInterface({ input: readable })
    reader.on('line', (line) => {
      reader.close()
      resolve(line)
    })
  })
}
/**
 * 
 * @param {String} query 
 */
function createOutputFile(query) {
  if(!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath)
  }

  fs.writeFileSync(filePath, query)


}

export {
  getColumnsFromCsv,
  createOutputFile
}