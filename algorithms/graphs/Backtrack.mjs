export default class Backtrack {
  consturctor() {
    this.isFinished = false;
  }

  execute(a, k, input) {
    if (this.isSolution(a, k, input)) {
      this?.processSolution(a, k);
      return;
    }

    k += 1;
    const candidates = this.constructCandidates(a, k, input);
    for (let i = 0; i < candidates.length; i++) {
      a[k] = candidates[i];
      this.makeMove?.(a, k, input);
      this.execute(a, k, input);
      this.unmakeMove?.(a, k, input);

      if (this.isFinished) return;
    }
  }
}
