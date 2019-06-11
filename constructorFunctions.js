// Constructor Functions

// A constructor is useful when you want to create multiple similar objects with the same properties and methods. The code creates objects as an instance of it.
       //1        //2
function Car(make, model, year) {
  this.make = make;
  this.model = model; //3
  this.year = year;
   //5  //4
  
}

/* 
  1. Name Capitalized
  2. Parameters
  3. Value
  4. Property
  5. 'this' keyword
*/

let car1 = new Car('Volvo', 'XC90', 2006)
let car2 = new Car('Ford', 'Mustang', 2012)
let car3 = new Car('Volkswagen', 'Jetta', 2013)
let car4 = new Car('Jeep', 'Cherokee', 2015)
let car5 = new Car('Acura', 'Infinity', 2009)

car4.fourWheelDrive = true;
car4['bumperStickers'] = false;

console.log(car4)