// import './lib/001.var.implicity-explicity';

const numbers1 = [1, 2, 3, true, 'saban'];
const numbers2: number[] = [1, 2, 3];
const numbers3: Array<number> = [5, 6, 7];

numbers2.push(4);
//                          1,2,3,4    , 5, 6, 7
const numbers4 = [...numbers2, ...numbers3];
//                          1,2,3,4      4711    , 5, 6, 7
const numbers5 = [...numbers2, 4711, ...numbers3];

console.log(numbers5);
// console.log(numbers1, numbers2, numbers3);
