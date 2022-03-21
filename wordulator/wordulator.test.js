const { guess } = require("./wordulator");

test("guess returns all green when the word is the solution", () => {
  expect(guess("peter", "peter")).toEqual(["green", "green", "green", "green", "green"]);
});

test("guess returns no letters in common with solutions", () => {
  expect(guess("peter", "hanna")).toEqual(["black", "black", "black", "black", "black"])
})

test("guess returns three letters in common with solutions", () => {
  expect(guess("peter", "ester")).toEqual(["black", "black", "green", "green", "green"])
})
