function commonItem(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // console.log(map);

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

commonItem(["a", "b", "c"], ["x", "z"]);

function commonItem2(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

commonItem2(["a", "b", "c"], ["b", "z"]);
