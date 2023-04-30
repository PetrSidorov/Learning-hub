import { sumArray } from './helpers.js'
class Elve {
    constructor(data) {
      this.numbers = data.split("\n").map(Number);
    }
  
    getSum() {
        return sumArray( this.numbers );
    }
  }
  
  export default Elve;
  