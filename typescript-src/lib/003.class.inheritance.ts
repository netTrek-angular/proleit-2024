class Human {

  protected gender?: 'man' | 'woman';

  get isWoman (): boolean {
    return this.gender === 'woman'
  }

  get isMan (): boolean {
    return this.gender === 'man'
  }

  constructor( public name: string ) {  }

  sayHello() {
    console.log( 'Human', this.name );
  }

}

class Man extends Human {

  constructor( name: string ) {
    super( name );
    this.gender = 'man';
  }

  override sayHello() {
    console.log( 'Man' );
    super.sayHello();
  }

}

class Woman extends Human {

  constructor( name: string ) {
    super( name );
    this.gender = 'woman';
  }

  override sayHello() {
    console.log( 'Woman', this.name );
  }

}

const saban = new Man( 'Saban' );
const heike = new Woman( 'Heike' );
saban.sayHello();
heike.sayHello();

console.log( saban.isMan, saban.isWoman );
console.log( heike.isMan, heike.isWoman );



export default {};
