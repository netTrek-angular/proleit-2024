

// function mit optionalen parametern
function add (a: number, b: number, c?: number): number {
    /*
    if (!c) { c = 0; }
    return a + b + c;
    */

    // return a + b + (c ?? 0);

    return a + b + (c || 0);
}

// function mit default parametern
function add2 (a: number, b: number, c: number = 0): number {
    return a + b + c;
}

function add3 ( a: number, b: number, ...rest: number[] ): number {
    let sum = 0;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return a + b + sum;
}

function add4 ( a: number, b: number, c: number = 99,  ...rest: number[] ): number {
    let sum = 0;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return a + b + c + sum;
}

function add5 ( a: number, b: number, { c = 0, d= 0}: {c?:number, d?: number} ): number {
  return a + b + c+ d;
}

function add6 ( a: number, b: number, { c = 0, d= 0}: {c?:number, d?: number} = {} ): number {
  return a + b + c+ d;
}


let addresse: [string, number] = ['Hauptstrasse', 1];
console.log(addresse);

// funktion mit tupe als parameter
function add7 ( a: number, b: number, [c, d]: [number, number] ): number {
  return a + b + c + d;
}

console.log(' add7( 1, 2, [3, 4] ) :: ' + add7(1, 2, [3, 4]));

console.log(' add5( 1, 2 ) :: ' + add5(1, 2, {c: 3, d: 4}));
console.log(' add5( 1, 2, 3 ) :: ' + add5(1, 2, {} ));

export default {};
