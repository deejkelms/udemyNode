var person = {
  name: 'Derek',
  age: 27
};
var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('-----challenge area-----');

var animal = '{"name": "Oliver"}';
console.log(typeof animal);
//convert to js object
var animalObject = JSON.parse(animal);
console.log(typeof animalObject);
//add age property
animalObject.age = 1;
console.log(animalObject);
//convert back to json
animal = JSON.stringify(animalObject);
//log to screen
console.log(animal);
