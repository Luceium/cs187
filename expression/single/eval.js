const expression = ${json}.expression.toLowerCase().trim().split('').filter(c => c != ' ').join('');
const correctAnswer = ${correctAnswer}.expression.toLowerCase().trim().split('').filter(c => c != ' ').join('');
if (expression == correctAnswer) return true;
var simplifiedChatbotAnswer = math.simplify(expression).toString();
var simplifiedCorrectAnswer = math.simplify(correctAnswer).toString();
if (simplifiedChatbotAnswer != simplifiedCorrectAnswer && !math.symbolicEqual(simplifiedChatbotAnswer, simplifiedCorrectAnswer)) throw Error();
return true;
