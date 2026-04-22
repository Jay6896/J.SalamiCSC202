// new is used to create an instance of a class
// Classes are declared in PascalCase
// USE # to make a variable private

class Teacher
{
  PrintDetails(name,course) 
  {
    console.log(`My name is ${name} and I lecture ${course}`)
  }
  constructor(name, course)
  {
    this.PrintDetails(name,course)
  }
}

let value = new Teacher("John", "COS202")


// 'extends' is used to inherhit as a child class or a specific method in a class without inheriting
// use super(var) to call a variable from a parent class, super.methodname() to call a method from a parent class


// POLYMORPHISM example
class Animal 
{
  Mammal()
  {

  }
}

class Dog extends Mammal()
{
  
  {

  }
}

class Cat 
{
  Type extends Mammal()
  {

  }
}