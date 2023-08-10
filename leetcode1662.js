const arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('')
};

console.log(arrayStringsAreEqual(['ad', 'c'], ['a', 'b', 'c']))