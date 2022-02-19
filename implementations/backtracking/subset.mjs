import Backtrack from "../../algorithms/graphs/Backtrack.mjs";

const backtrack = new Backtrack([], -1, 3);

backtrack.isSolution = function (a, k, n) {
  return k === n;
};

backtrack.constructCandidates = function (a, k, n, candidates) {
  return [true, false];
};

backtrack.processSolution = function (a, k) {
  let str = "";

  for (let i = 1; i <= k; i++) if (a[i]) str += i;
  console.log("{" + str + "}");
};

backtrack.execute([], 0, 3);
