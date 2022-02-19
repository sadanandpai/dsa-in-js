import Backtrack from "../../algorithms/graphs/Backtrack.mjs";

const backtrack = new Backtrack();

backtrack.isSolution = (_, k, input) => k >= input.length;

backtrack.constructCandidates = function (a, k, input) {
  const array = a.slice(1, k);
  const candidates = new Set();
  for (let i = 0; i < input.length; i++) {
    const index = array.indexOf(input[i]);
    if (index < 0) {
      candidates.add(input[i]);
    } else {
      delete array[index];
    }
  }

  return [...candidates];
};

backtrack.processSolution = function (a) {
  console.log(a.slice(1));
};

backtrack.execute([], 0, [1, 1, 2, 2]);
