function positiveSum(arr) {
    var arr = arr.filter(el=>el>0)
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(positiveSum([1,-2,3]));