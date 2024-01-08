function sum ( a: number, b: number ): number {
    return a + b;
}



function sum2 ( a: number, b: number ): void {
  console.log('sum2( 1, 2 )', a + b );
}

console.log( 'sum( 1, 2 )', sum( 1, 2 ) );
sum2( 1, 2 );

function sum3 ( a: number, b: number ): never {
  throw new Error('sum3( 1, 2 )');
}

function genSample<T> ( arg: T ): T {
  return arg;
}

const firstname: string = 'max';

const sample1 = genSample(42);
const sample2 = genSample('42');
const sample3 = genSample(true);
const sample4 = genSample(firstname);

function parsedJson (): unknown {
  return JSON.parse('{"name": "Max"}');
}

function safeParse<T = unknown> ( jsonString: string ): T | null {
  try {
    return JSON.parse(jsonString) as T;
  } catch {
    return null;
  }
}

const max1 = safeParse('{"name": "Max"}');

interface Human {
  name: string;
  age: number;
}

// ! bedeutet das der wert nicht null sein kann genau so wie ? bedeutet das der wert null sein kann
// const max2 = safeParse<Human>('{"name": "Max", "age": 42}');
const max2 = safeParse<Human>('{"name": "Max", "age": 42}')!;
// ? bedeutet das der wert null sein kann in dem fall ist max2.name null alternativ wird max2.name ausgegeben
// console.log(max2, max2?.name);
// console.log(max2, max2!.name);
console.log(max2, max2.name);

function logLength <T extends {length: number}> ( arg: T ) {
  console.log( arg.length );
  return arg.length;
}

logLength( 'Saban' );
logLength( [1, 2, 3] );

export default {};
