'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    function swapNums(arr, i, j) {
      const temp = arr[j];

      arr[j] = arr[i];
      arr[i] = temp;
    }

    for (let i = 0; i < this.length - 1; i++) {
      let minValue = this[i];

      for (let j = i + 1; j < this.length; j++) {
        const currentValue = this[j];

        if (compareFunction) {
          const result = compareFunction(minValue, currentValue);

          if (result > 0) {
            swapNums(this, i, j);

            minValue = currentValue;
          }

          continue;
        }

        if (String(currentValue) < String(minValue)) {
          swapNums(this, i, j);

          minValue = currentValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
