import BS from "../../algorithms/search/BinarySearch.mjs";

let array = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5, 5];
let bs = new BS(array);

const leftIndex = bs.getLeftBound(1);
const rightIndex = bs.getRightBound(1);

const element = 4;
const index = new BS(array).getIndex(element);
console.log(array);
console.log(`array[${index}] = ${element}`);
console.log(`Left index: ${leftIndex}, Right index: ${rightIndex}, Occurences: ${rightIndex - leftIndex}`);
