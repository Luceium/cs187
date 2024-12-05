const expression = ${json}.expression.toLowerCase().trim();
const correctAnswer = ${correctAnswer}.expression.toLowerCase().trim();
if (expression == correctAnswer) return true;
var simplifiedChatbotAnswer = math.simplify(expression).toString();
var simplifiedCorrectAnswer = math.simplify(correctAnswer).toString();
if (simplifiedChatbotAnswer != simplifiedCorrectAnswer && !math.equal(simplifiedChatbotAnswer, simplifiedCorrectAnswer)) throw Error();
return true;