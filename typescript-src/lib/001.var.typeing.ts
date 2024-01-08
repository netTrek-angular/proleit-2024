
let age: number = 42;

let id: number | string = 42;

id = '42';

// id = true;

let city: string | null = 'Dorsten';

console.log( city );

let list1: ( string | boolean | number )[] = ['asd', 42, true];
let list2: number[] | string[] = ['asd', '42'];
let list3: number[] | string[] = [1, 42];
let list4: Array<number | string | boolean> = [1, 42, 'asd', true];

let colors: 'red' | 'green' | 'blue' = 'green';
colors = 'red';
// colors = 'yellow';

// obj erwartet zwingend x und y und optional name. x, y sind zwingend number und name ist optional string
let obj: {x: number, y: number, name?: string} = {x: 0, y: 0};
obj.name = 'saban';;

let pos: {x: number, y: number, name?: string} = {x: 0, y: 0, name: 'center'};

interface Person {
  name: string,
  age: number;
}

interface Position {
  x: number;
  y: number;
  name?: string
}

let pos2: Position = {x: -100, y: 100, name: 'left top'};

let obj2:Position = {x: 0, y: 0};
obj2.name = 'saban';

let pos3:Position = {x: 0, y: 0, name: 'center'};

let saban: Person = { name: 'saban', age: 42 };

interface Human {
  name: string;
  age: number;
  sayHello: () => void;
}

const peter: Human = {
  name: 'Peter',
  age: 42,
  sayHello: function () {
    console.log('Hello', this.name );
  }
}

console.log ( peter );
peter.sayHello();


class Man {
  namen?: string;
  age?: number;
}

const frank = new Man();
console.log(frank);
frank.age = 22;
frank.namen = 'Frank';
console.log(frank);

enum Color {Red, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
console.log(notSure);

//never und unknow -> siehe Functions und Fetch


export default {};
