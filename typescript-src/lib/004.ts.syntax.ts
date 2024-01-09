import {getUsr} from "./000.helper";

const list1: number[] = [1, 2, 3];
const list2 = [1, 2, 3];

const list3 = [...list1, 4711, ...list2 ];
const list4 = list1.concat(4711, list2); // alter weg


const list2Clone = [...list2]; // wichtig - clone nur auf oberster ebene
list2Clone.push( 4711 );
// console.log(list1, list2, list3, list4, list2Clone);


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }


const saban = {
  name: 'Saban',
  age: 44,
};

const sabanClone = { ...saban };
sabanClone.age = 45;

const sabanExtended = { ...saban, age: 45, city: 'Hamburg' };
console.log(saban, sabanClone, sabanExtended);

const userObj = {id: 1, name: 'Saban', age: 44, city: 'Hamburg', department: 'IT', company: 'Saban GmbH'};
const {name, department} = userObj; // destructuring
/*

const name = userObj.name;
const department = userObj.department;
*/

console.log(name, department);


export default {};
