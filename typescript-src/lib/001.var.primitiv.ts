
let age: number = 42;
console.log('Age' , age);

const ages: number[] = [42, 43, 44];
console.log('ages', ages);

function chgAge (param: number | number[] ): void {
  if (typeof param === 'number') {
    param = param + 1; // wert bleibt unverändert da immutiable primitiv
    console.log('primitiv param', param);
  } else {
    param[0] = param[0] + 1;
    // const ages2 = [...ages];
    // ages2[0] = ages2[0] + 1;
    // console.log('ages2', ages2);
  }
}

chgAge(age);
chgAge(ages);


console.log('Age' , age);
console.log('ages', ages);

console.log( Object.isFrozen( 1 ) );
console.log( Object.isFrozen( 'string' ) );
console.log( Object.isFrozen( true ) );
console.log( Object.isFrozen( [] ) );

console.log( 'age sealed', Object.isSealed( age ))
console.log( 'ages sealed', Object.isSealed( ages ))

console.log( 'age extensible', Object.isExtensible( age ))
console.log( 'ages extensible', Object.isExtensible( ages ))


export default {};
