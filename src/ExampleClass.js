export default class ExampleClass {
  constructor() {
  }

  hello() {
    document.body.appendChild( new Text( 'Hello!' ) ) ;
  }

  async asyncTest() {
    document.body.appendChild( new Text( 'Async1!' ) ) ;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    document.body.appendChild( new Text( 'Async2!' ) ) ;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    document.body.appendChild( new Text( 'Async3!' ) ) ;
  }
}