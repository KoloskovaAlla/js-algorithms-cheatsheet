/**
 * Сниппет: Превращение индекса в букву (0 -> A, 1 -> B ...)
 */

const getLetterFromIndex = (index) => {
    return String.fromCharCode(index + 65)
};

console.log(getLetterFromIndex(0))
console.log(getLetterFromIndex(1))
console.log(getLetterFromIndex(2))

