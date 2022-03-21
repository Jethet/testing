function guess(word, solution) {
  if (word === solution) {
    return ["green", "green", "green", "green", "green"];
  } else if (word !== solution) {
    return ["black", "black", "black", "black", "black"]
  }
}


module.exports = {
  guess,
};

