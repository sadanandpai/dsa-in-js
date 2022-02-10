export default class BinarySearch {

  constructor(array){
    this.array = array;
  }

  getIndex(element) {
    let low = 0;
    let high = this.array.length - 1;
    let mid = Math.floor((low + high) / 2);

    while (low <= high) {
      if (this.array[mid] === element) return mid;
      if (this.array[mid] > element) high = mid - 1;
      else low = mid + 1;

      mid = Math.floor((low + high) / 2);
    }

    return -1;
  }

  getLeftBound(element) {
    let low = 0;
    let high = this.array.length - 1;
    let mid = Math.floor((low + high) / 2);

    while (low <= high) {
      if (element > this.array[mid]) low = mid + 1;
      else high = mid - 1;

      mid = Math.floor((low + high) / 2);
    }

    return low;
  }

  getRightBound(element) {
    let low = 0;
    let high = this.array.length - 1;
    let mid = Math.floor((low + high) / 2);

    while (low <= high) {
      if (element < this.array[mid]) high = mid - 1;
      else low = mid + 1;

      mid = Math.floor((low + high) / 2);
    }

    return low;
  }
}
