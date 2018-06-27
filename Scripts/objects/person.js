let objects; // objects namespace or module
// (function(objects) {
//   // Person class
//   let Person = (function() {
//     function Person(name, age) {
//       this._name = name;
//       this._age = age;
//     }

//     Person.prototype.saysHello = function() {
//       console.log(this._name + " says Hello!" +"\nHow are you?");
//     };
//     return Person;
//   })();

//   objects.Person = Person;
// })(objects || (objects = {}));

(function (objects) {
  class Person 
  {
    constructor(name, age) 
    {
            this._name = name;
            this._age = age;
    }

    saysHello() 
    {
      console.log(`${this._name} is saying hellow to you!`);
    }
    studies() 
    {
      console.log(`${this._name} is studying!`);
    }
  }

  objects.Person = Person;
})(objects || (objects = {}));

