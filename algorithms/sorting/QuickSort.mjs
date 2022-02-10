export default class QuickSort {
  constructor(array) {
    this.array = array;
  }

  sort(pivot = 0, low = 0, high = this.array.length - 1) {
    if (low >= high) return;

    const p = this.partition(this.array, pivot, low, high);
    this.sort(low, low, p - 1);
    this.sort(p + 1, p + 1, high);
  }

  partition(array, pivot, low, high) {
    while (high >= low) {
      while (array[high] > array[pivot]) {
        high--;
      }
      while (array[low] <= array[pivot]) {
        low++;
      }

      if (low < high) [array[low], array[high]] = [array[high], array[low]];
    }

    [array[high], array[pivot]] = [array[pivot], array[high]];

    return high;
  }
}
