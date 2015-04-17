var assert = require('assert');
var BubbleSort = require('../../../algorithms/sorting/bubblesort.js').BubbleSort;

function makeRandomArray() {

  var precision = 2;
  var multiplier = 100;
  var size = 100;
  var result = [];

  for (var i = size; i > 0; i -= 1) {
    result.push(parseFloat((Math.random() * multiplier).toFixed(precision)));
  }
  return result;
}

// http://stackoverflow.com/questions/7440001/iterate-over-object-keys-in-node-js
Object.keys(BubbleSort).forEach(function(key) {
  var fn = BubbleSort[key];
  var bubblesort = fn;

  describe(key + ' Bubble Sort', function(){

    it('should work with empty arrays', function () {
      assert.deepEqual(bubblesort([]), []);
    });

    it('should work with ascending arrays', function () {
      assert.deepEqual(bubblesort([3, 1, 4, 1, 5, 9, 2, 6, 5, 4]), [1, 1, 2, 3, 4, 4, 5, 5, 6, 9]);
      assert.deepEqual(bubblesort([9, 2, 8, 6, 1, 3]), [1, 2, 3, 6, 8, 9]);
      assert.deepEqual(bubblesort([5, 2, 2, 6, 1, 3]), [1, 2, 2, 3, 5, 6]);
      assert.deepEqual(bubblesort([5, 2, 4, 6, 1, 3]), [1, 2, 3, 4, 5, 6]);
      assert.deepEqual(bubblesort([0, 0, 0, 0, 0, -1]), [-1, 0, 0, 0, 0, 0]);
    });

    it('should work with random non-sorted arrays', function () {
      var array = makeRandomArray({
        precision: 0
      });
      bubblesort(array);
      for (var i = 0; i < array.length - 1; i += 1) {
        assert((array[i] <= array[i + 1]) === true);
      }
    });

  });

});
