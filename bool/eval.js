const expression = ${json}.expression;
const correctAnswer = ${correctAnswer}.expression;
if (expression != correctAnswer) throw Error();
return true;