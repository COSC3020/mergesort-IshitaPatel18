function mergesort(array) {
  let size = array.length;

  // Geeks for Geeks was used for this part of the code to solve the division iteration
  for (let i = 1; i <= size - 1; i *= 2) {
    for (let leftS = 0; leftS < size - 1; leftS += 2 * i) {
      let mid = leftS + i - 1;
      let rightE = Math.min(leftS + 2 * i - 1, size - 1);

      let first = leftS;
      let second = mid + 1;
      let tmp;
      while (first <= mid && second <= rightE) {
        if (array[first] <= array[second]) {
          first++
        }
        else {
          //At this point I was stuck again and I got help from the mergesort done by Clayton Brown
          tmp = array[second];
          for (let shuffle = second; shuffle > first; shuffle--) {
            array[shuffle] = array[shuffle - 1];
          }
          array[first] = tmp;
          first++;
          mid++;
          second++;
        }
      }
    }
  }
  return array;
}
