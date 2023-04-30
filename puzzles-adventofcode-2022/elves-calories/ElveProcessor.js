import Elve from './Elve.js';
import { sumArray, sortArrayFromBiggest } from './helpers.js';

class ElveProcessor {
    constructor(arrayFromData) {
      this.elves = arrayFromData.map((data) => new Elve(data));
      this.elvesCaloriesDaily = this.elves.map((elve) => elve.getSum() );
    }
  
    countMax(n) {
        const sortedElvesArray =  sortArrayFromBiggest(this.elvesCaloriesDaily);
        const sumBiggestN = sortedElvesArray.slice(0, n);
        const result = sumArray(sumBiggestN);
        return result;
    }

  }

export default ElveProcessor;