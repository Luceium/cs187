const expressions = ${json}.expression;
const correctAnswers = ${correctAnswer}.expression;
if (expressions.length != correctAnswers.length) throw Error();
for (let i = 0; i < expressions.length; i++) {
    const expression = expressions[i].toLowerCase().trim().split('').filter(c => c != ' ').join('');
    const correctAnswer = correctAnswers[i].toLowerCase().trim().split('').filter(c => c != ' ').join('');
    if (expression == correctAnswer) continue;
    var simplifiedChatbotAnswer = math.simplify(expression).toString();
    var simplifiedCorrectAnswer = math.simplify(correctAnswer).toString();
    if (simplifiedChatbotAnswer != simplifiedCorrectAnswer && !math.equal(simplifiedChatbotAnswer, simplifiedCorrectAnswer)) throw Error();
}
return true;