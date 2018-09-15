// 1. Let min = 0 and max = n-1.
// 2. If max < min, then stop: target is not present in array. Return -1.
// 3. Compute guess as the average of max and min, rounded down (so that it is an integer).
// 4. If array[guess] equals target, then stop. You found it! Return guess.
// 5. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
// 6. Otherwise, the guess was too high. Set max = guess - 1.
// 7. Go back to step 2.

'use strict'

const search = (array, element) => {
  return perform(array.sort(), 0, array.length - 1, element)
}

const perform = (arr, start, end, elt) => {
  if (end < start) { return console.log(`Element doesn't exist in the array`) }

  let middle = (end + start) / 2 | 0

  if (elt === arr[middle]) {
    console.log(`Index of the element is: ${middle}`)
    return middle
  }
  if (arr[middle] < elt) {
    return perform(arr, middle + 1, end, elt)
  } else {
    return perform(arr, start, middle - 1, elt)
  }
}

module.exports = search
