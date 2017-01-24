function createAdder(baseNumber){
  return function (numToAdd){
    return baseNumber + numToAdd;
  }
}


function greetMaker(name) {
  // closure is a function created within a function
  function greet(){
    console.log('Hello ' + name + '!');
  }
  return greet;
}

var greetDerek = greetMaker('Derek');
greetDerek();
