import Backtrack from "../../algorithms/graphs/Backtrack.mjs";

const backtrack = new Backtrack();

backtrack.isSolution = (_, k, n) => k === n;

backtrack.constructCandidates = function (a, k, n) {
  const set = new Set(a.slice(1, k));
  const candidates = [];
  for (let i = 1; i <= n; i++) {
    if (!set.has(i) && i !== k) {
      candidates.push(i);
    }
  }
  return candidates;
};

backtrack.processSolution = function (a) {
  console.log(a.slice(1));
};

backtrack.execute([], 0, 4);
