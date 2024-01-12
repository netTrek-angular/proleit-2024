import {LazyLogic} from "./lazy-logic";

export class NumPlugIn implements LazyLogic {
    num: number = 0;
    getNum(): number {
      return this.num;
    }
}
