function average(scores) {
  // add all scores together
  var total = 0;
  scores.forEach(function (score) {
    total += score;
  });
  // devide by total scores
  var avg = total / scores.length;

  // round average
  return Math.round(avg);
}
console.log('Average Score From Eng department');
var scores = [34, 45, 423, 23, 232, 44, 121, 21, 1];
console.log(average(scores));

console.log('Average Score From Arc department');
var score2 = [34, 45, 556, 7, 8, 9, 8, 987, 56, 4, 3, 2, 12, 21];
console.log(average(score2));
