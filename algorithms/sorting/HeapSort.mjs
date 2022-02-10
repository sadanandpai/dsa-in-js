export default class HeapSort {
  constructor(array = [], isMinHeap = true) {
    this.array = array;
    this.isMinHeap = isMinHeap;
  }

  sort() {
    for (let i = Math.floor(this.array.length / 2); i >= 0; i--) this.heapify(i);

    const sortedArray = [];
    while (this.array.length !== 1) {
      sortedArray.push(this.array[0]);
      this.array[0] = this.array.pop();
      this.heapify(0);
    }
    this.array = sortedArray.concat(this.array);
  }

  insert(value) {
    this.array.push(value);
    this.bubbleUp(this.array.length - 1);
    return this.insert.bind(this);
  }

  bubbleUp(x) {
    const n = this.getParentIndex(x);
    if (n === -1) return;
    const siblings = this.getChildrenIndices(n);
    if (this.swapIfNeeded(n, siblings)) this.bubbleUp(n);
  }

  getParentIndex(x) {
    return Math.ceil(x / 2) - 1;
  }

  getChildrenIndices(n) {
    return [n * 2 + 1, n * 2 + 2];
  }

  heapify(n) {
    const x = this.swapIfNeeded(n, this.getChildrenIndices(n));
    if (x) this.heapify(x);
  }

  swapIfNeeded(n, [x, y]) {
    if (this.array[y] === undefined && this.comparator(n, x)) {
      this.swap(n, x);
      return x;
    }

    if (this.comparator(n, x) || this.comparator(n, y)) {
      if (this.comparator(x, y)) {
        this.swap(n, y);
        return y;
      } else {
        this.swap(n, x);
        return x;
      }
    }

    return false;
  }

  comparator(x, y) {
    return this.isMinHeap ? this.array[x] > this.array[y] : this.array[x] < this.array[y];
  }

  swap(x, y) {
    const temp = this.array[x];
    this.array[x] = this.array[y];
    this.array[y] = temp;
  }
}

