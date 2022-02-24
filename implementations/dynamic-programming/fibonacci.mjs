const table = [0, 1];
function fibTabulation(n) {
  if (n < 2) {
    return table[n];
  }

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

const mem = [0, 1];
function fibMemoization(n) {
  if (n < 2) {
    return mem[n];
  }

  mem[n] = fibMemoization(n - 1) + fibTabulation(n - 2);
  return mem[n];
}

console.log(fibTabulation(8));
console.log(fibMemoization(8));
