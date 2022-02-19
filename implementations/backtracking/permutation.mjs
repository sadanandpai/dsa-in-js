import Backtrack from "../../algorithms/graphs/Backtrack.mjs";

const backtrack = new Backtrack([], -1, 3);

backtrack.isSolution = (_, k, n) => k === n;

backtrack.constructCandidates = function (a, k, n) {
  const set = new Set(a.slice(0, k));
  const candidates = [];
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      candidates.push(i);
    }
  }
  return candidates;
};

backtrack.processSolution = function (a, k) {
  let str = "";
  for (let i = 1; i <= k; i++) str += a[i];
  console.log(str);
};

backtrack.execute([], 0, 3);
