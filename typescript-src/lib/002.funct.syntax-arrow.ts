function regularFunctionadd (a: number): number {
  return a;
}


const sum = (a: number, b: number) => a + b;

const hochZwei: (a:number) => number = a => {
  return a * a;
};
// const hochZwei: (a:number) => number = a => a * a;
console.log( hochZwei(2) );

const log = (a: number, b:number): void => console.log(a + b);

/*

const add = ( base: number ): (value: number) => number => {
  return (value: number): number => {
    return base + value;
  };
}

*/
const add = ( base: number ): (value: number) => number => (value: number): number => base + value;
const addTo10 = add(10);
const addTo20 = add(20);

console.log(addTo10(5)); // 15
console.log(addTo20(5)); // 25

function getFunctionThatAddsANumberToABaseNumber ( base: number): ( value: number ) => number {
  return function ( value: number ): number {
    return base + value;
  }
}

const addNumberToBase10 = getFunctionThatAddsANumberToABaseNumber(10);


const sumWithCallback = (a: number, b: number, callback: (result: number) => void): void => {
  const result = a + b;
  callback(result);
}

sumWithCallback(1, 2, (result) => console.log('result', result));

const srcList = [1, 2, 3, 4, 5];
const powList = srcList.map( (value) => value * value );
console.log(powList, srcList);

const add4 = ( a: number, b: number,  ...rest: number[] ): number => {
  return a + b + rest.reduce( (a, b) => a + b, 0 );
}

console.log('rest add4( 1, 2, 3, 4, 5 ) :: ' + add4( 1, 2, 3, 4, 5 ) ); // 15

console.log( addNumberToBase10 (5)) // 15
console.log( addNumberToBase10 (6)) // 16
console.log( addNumberToBase10 (7)) // 17
console.log( getFunctionThatAddsANumberToABaseNumber(10) (5)) // 15
console.log( getFunctionThatAddsANumberToABaseNumber(10) (6)) // 16
console.log( getFunctionThatAddsANumberToABaseNumber(10) (7)) // 17



const header = document.querySelector('h1#myHeader');
// console.log(header);

class HeaderComponent {
  constructor(
    private header: HTMLElement
  ) {
    this.addListener ();
  }

  private addListener() {
    this.header.addEventListener('click', () => {
      this.header.textContent = 'new Header';
    });
  }
}

const myHeader = new HeaderComponent(header as HTMLElement);


export default {};
