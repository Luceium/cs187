const expressions = ${json}.expression;
const correctAnswers = ${correctAnswer}.expression;
if (expressions.length != correctAnswers.length) throw Error();
for (let i = 0; i < expressions.length; i++) {
    const expression = expressions[i].toLowerCase().trim().split('').filter(c => c != ' ').join('');
    const correctAnswer = correctAnswers[i].toLowerCase().trim().split('').filter(c => c != ' ').join('');
    if (expression != correctAnswer && !math.symbolicEqual(expression, correctAnswer)) continue;
    throw Error();
}
return true;
