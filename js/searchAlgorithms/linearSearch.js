'use strict'

const search = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      console.log(`Index of the element: ${element} is: ${i}`)
      return i
    }
  }
  return console.log(`Element doesn't exist in the array`)
}

module.exports = search
