
class Person {
  static readonly MAX_AGE = 150;
  static sayHello() {
    console.log('Person static sayHello');
  }

  get age(): number {
    return this._age;
  }

  // private set age(value: number) { für nach außen schreibgeschützte Eigenschaft
  set age(value: number) {
    this._age = Math.max(0, value);
  }

  private _age: number = 0;

  constructor ( public name: string ) {
    console.log('Person constructor', this);
  }

  sayHello() {
    console.log( 'Person', this.name );
  }

}
Person.sayHello();
const p = new Person( 'Hans' );
p.sayHello();
p.age = 42;
p.age++;
console.log(p.name, p.age);

export default {};
