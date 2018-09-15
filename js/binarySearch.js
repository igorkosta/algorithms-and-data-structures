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
