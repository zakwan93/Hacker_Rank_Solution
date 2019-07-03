// Naive
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// Better

function hasPairWithSum2(arr, sum) {
  let mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      console.log(true);
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  console.log(false);
  return false;
}

hasPairWithSum2([1, 2, 4, 5], 3);
