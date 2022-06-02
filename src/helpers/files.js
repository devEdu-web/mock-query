import fs, { existsSync } from 'node:fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url));
const folderPath = path.join(__dirname, '..', '..', 'outQuery')
const filePath = path.join(__dirname, '..', '..', 'outQuery', 'query.txt')

function createOutputFile(query) {
  if(!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath)
  }

  fs.writeFileSync(filePath, query)


}

export default createOutputFile