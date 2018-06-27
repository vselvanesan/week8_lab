// core module - IIFE
(function() {
  // App variables
  let person;
  let student;

  /*
  let Student = (function() {
    function Student(name, age, studentID) {
      objects.Person.call(this, name, age);
      this._studentID = studentID;
    }

    // extends the Person class or inherit from the person class
    Student.prototype = Object.create(objects.Person);
    //Student.prototype.constructor = Student;

    Student.prototype.saysHello = function() {
      console.log(`${this._name} says Hello`);
    };

    Student.prototype.studies = function() {
      console.log(`${this._name} is studying!`);
    };

    return Student;
  })();
  */

  /**
   * This function is used for Intialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-weight: bold; font-size: 20px;"
    );

    // object creation also called instantiation
    person1 = new objects.Person("Tom", 49);

    person2 = new objects.Person("Carol", 20);

    Main();
  }

  /**
   * This function is the where the main functionality for our
   * web app is happening
   */
  function Main() {
    console.log(`%c App Started...`, "font-weight: bold; font-size: 20px;");
    
    console.log(person1);
    person1.saysHello();
    person1.studies();

    console.log(person2);
    person2.saysHello();
    person2.studies();
  }

  window.addEventListener("load", Start);
})();
