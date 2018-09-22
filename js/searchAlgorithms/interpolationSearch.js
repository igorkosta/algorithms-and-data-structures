'use strict'

const search = (array, element) => {
  return perform(array, 0, array.length - 1, element)
}

const perform = (arr, start, end, elt) => {

  while (start < end && elt >= arr[start] && elt <= arr[end]) {
    let pos = start + Math.floor((elt - arr[start]) * (end - start) / (arr[end] - arr[start]))

    if (elt === arr[pos]) {
      console.log(`Index of the element: ${elt} is: ${pos}`)
      return pos
    }
    if (elt < arr[pos]) {
      return perform(arr, start, pos - 1, elt)
    } else {
      return perform(arr, pos + 1, end, elt)
    }
  }
  return console.log(`Element doesn't exist in the array`)
}

module.exports = search
