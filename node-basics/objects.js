var person = {
  firstName: 'Derek',
  lastName: 'Kelmanson',
  age: '27'
};

// person.firstName = "Bleh";
// person.lastName = "Blah";

function greetUser(person){
  console.log('Hello ' + person.firstName + ' ' + person.lastName + '!');
}

greetUser(person);
