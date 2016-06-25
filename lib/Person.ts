
class Person{
  constructor(private name:string){

  }
  getName():string{
    return this.name;
  }
  callbackTest(callback:Function) {
    callback(true, "stringParam");
  }
}

export = Person;
