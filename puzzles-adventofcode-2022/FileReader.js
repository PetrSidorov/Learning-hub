import { readFileSync } from 'fs' // esm (ecma script modules) 2015

class FileReader {
  constructor(filePath) {
    this.filePath = filePath;
  }

  readData() {
    const data = readFileSync(this.filePath).toString();
    return data;
  }

  convertToArray(data) {
    const arrayFromData = data.split("\n\n");
    return arrayFromData;
  }
}

export default FileReader;