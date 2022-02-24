const f = [[1]];

function binoCo(n, k) {
  for (let i = 1; i <= n; i++) {
    f.push([]);
    for (let j = 0; j <= i; j++) {
      f[i][j] = (f[i - 1][j - 1] ?? 0) + (f[i - 1][j] ?? 0);
    }
  }
  return f[n][k];
}

console.log(binoCo(12, 8));
