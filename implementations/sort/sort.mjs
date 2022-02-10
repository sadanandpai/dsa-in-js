import HeapSort  from "../../algorithms/sorting/HeapSort.mjs";
import MergeSort  from "../../algorithms/sorting/MergeSort.mjs";
import QuickSort  from "../../algorithms/sorting/QuickSort.mjs";

// to build heap
// let heap = new HeapSort();
// heap.insert(7)(9)(4)(3)(6)(7)(1)(5);
// console.log(heap.array);

const array = [7, 9, 4, 3, 6, 7, 1, 5];

// with unsorted array
const heap = new HeapSort([...array]);
heap.sort();
console.log(heap.array);

// with unsorted array
const merge = new MergeSort([...array]);
console.log(merge.sort());

const quick = new QuickSort([...array]);
quick.sort();
console.log(quick.array);
