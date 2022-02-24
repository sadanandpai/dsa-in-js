const w1 = "horse";
const w2 = "hello";

const mem = Array.from(new Array(w1.length), (_) => []);
function minDistanceMem(w1, w2, i, j) {
  if (!w1) return w2.length;
  if (!w2) return w1.length;

  if (mem[i]?.[j] !== undefined) return mem[i][j];

  if (w1[0] === w2[0]) {
    return minDistanceMem(w1.substring(1), w2.substring(1), i + 1, j + 1);
  }

  const insert = 1 + minDistanceMem(w1, w2.substring(1), i, j + 1);
  const remove = 1 + minDistanceMem(w1.substring(1), w2, i + 1, j);
  const replace = 1 + minDistanceMem(w1.substring(1), w2.substring(1), i + 1, j + 1);

  const min = Math.min(insert, remove, replace);
  mem[i][j] = min;

  return min;
}

const table = Array.from(new Array(w1.length + 1), (_) => []);
const parents = Array.from(new Array(w1.length + 1), (_) => []);
function minDistanceTabulation(w1, w2) {
  if (!w1 && !w2) return 0;
  if (!w1) return w2.length;
  if (!w2) return w1.length;

  table[0][0] = 0;
  for (let i = 0; i <= w1.length; i++) {table[i][0] = i; parents[i][0] = 'DEL'; }
  for (let j = 0; j <= w2.length; j++) {table[0][j] = j; parents[0][j] = 'INS'; }
  parents[0][0] = -1;

  for(let i = 1; i <= w1.length; i++) {
    for (let j = 1; j <= w2.length; j++){
      const insert = 1 + table[i][j-1];
      const remove = 1 + table[i-1][j];
      const replace = table[i-1][j-1] + (w1[i-1] !== w2[j-1]);

      table[i][j] = Math.min(insert, remove, replace);
      parents[i][j] = table[i][j] === insert ? 'INS' : (table[i][j] === remove ? 'DEL' : 'REP');
    }
  }

  consturctPath(parents, w1.length, w2.length);

  return table[w1.length][w2.length];
}

function consturctPath(parents, i, j){

  if(parents[i][j] === -1) return;

  if(parents[i][j] === 'REP'){
    consturctPath(parents, i-1, j-1);
    if(w1[i-1] !== w2[j-1]){
      console.log(`Replace ${w1[i-1]} with ${w2[j-1]}`);
    }
    return;
  }

  if(parents[i][j] === 'INS'){
    consturctPath(parents, i, j-1);
    console.log(`Insert ${w2[j-1]}`);
    return;
  }

  if(parents[i][j] === 'DEL'){
    consturctPath(parents, i-1, j);
    console.log(`Delete ${w1[i-1]}`);
    return;
  }

}

// console.log(minDistanceMem(w1, w2, 0, 0));
console.log('Minimum distance is ' + minDistanceTabulation(w1, w2, 0, 0));