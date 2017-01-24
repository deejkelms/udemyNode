var grades = [100, 80];
grades.push(69);

// .pop removes last item in the array
// .shift removes first item in the array

var totalGrade = 0;

grades.forEach(function(grade) {
  totalGrade += grade;
  return totalGrade;
});

var average = totalGrade / grades.length;

console.log(totalGrade);
console.log(average);
