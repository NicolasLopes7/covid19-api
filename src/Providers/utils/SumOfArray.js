module.exports = {
  sumOfArray(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
      sum += array[index]
    }
    return sum
  },
}
