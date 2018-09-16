'use strict'

const search = (array, element) => {
  let arr = array.sort()
  let block = Math.sqrt(arr.length) | 0
  for (let i = 0; i < arr.length; i += block) {
    let start = i > 0 ? i - block : i
    if (element === arr[i]) {
      console.log(`Index of the element is: ${i}`)
      return i
    }

    if (element < arr[i]) {
      for (let y = start; arr[i]; y++) {
        console.log(`perform linear search from ${y} to ${arr[i]}`)
        if (element === arr[y]) {
          console.log(`Index of the element is: ${y}`)
          return y
        }
      }
    }
  }
  return console.log(`Element doesn't exist in the arr`)
}

module.exports = search
