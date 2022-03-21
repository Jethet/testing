function guess(word, solution) {
  for (let i = 0; i <= word.length; i++){
    if (word[i] === solution[i]) {
      return ["green"];
    } else if (word[i] !== solution[i]) {
      return ["black"]
    }
  }
}


module.exports = {
  guess,
};

