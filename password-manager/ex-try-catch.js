function doWork(){
  throw new Error('Unable to do work.');
}


try {
  //call do work
  doWork();
} catch(e) {
  console.log(e.message);
} finally {
  console.log('Finally block executed');
}

console.log('try catch ended');
