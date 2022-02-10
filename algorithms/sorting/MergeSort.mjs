export default class MergeSort {
  constructor(array) {
    this.array = array;
  }

  sort(array = this.array) {
    if (array.length === 1) return array;

    const arr1 = this.sort(array.slice(0, array.length / 2));
    const arr2 = this.sort(array.slice(array.length / 2, array.length));

    return this.merge(arr1, arr2);
  }

  merge(arr1, arr2) {
    const arr = [];
    let i = 0,
      j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        arr.push(arr1[i++]);
      } else {
        arr.push(arr2[j++]);
      }
    }

    while (i < arr1.length) arr.push(arr1[i++]);
    while (j < arr2.length) arr.push(arr2[j++]);

    return arr;
  }
}
