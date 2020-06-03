function chunkArrayInGroups(arr, size) {
  // Break it up.
  let startIndexInclusive = 0;
  let endIndexNotInclusive = size;
  let newArr = [];
  let lastPartSize = arr.length % size;
  let partsOfNewArr;
  
  if (lastPartSize != 0) {
    partsOfNewArr = (arr.length - lastPartSize) / size + 1;
  }
  else {
    partsOfNewArr = arr.length  / size;
  }
  
  console.log("Size of arr: " + arr.length);
  console.log("Size of parts: " + size);
  console.log("Parts: " + partsOfNewArr);
  console.log("Last part size: " + lastPartSize);
  console.log("------------------");

  for (let i = 0; i < partsOfNewArr; i++) {
    if (lastPartSize == 0) {
      console.log(i + ": " + startIndexInclusive + " " + endIndexNotInclusive);
      newArr.push(arr.slice(startIndexInclusive, endIndexNotInclusive));
      startIndexInclusive += size;
      endIndexNotInclusive += size;
    }
    else if (lastPartSize > 0) {
      if (i != partsOfNewArr - 1) {
        console.log(i + ": " + startIndexInclusive + " " + endIndexNotInclusive);
        newArr.push(arr.slice(startIndexInclusive, endIndexNotInclusive));
        startIndexInclusive += size;
        endIndexNotInclusive += size;
      }
      else if (i == partsOfNewArr - 1) {
        endIndexNotInclusive = startIndexInclusive + lastPartSize - 1;
        console.log(i + ": " + startIndexInclusive + " " + endIndexNotInclusive);
        newArr.push(arr.slice(startIndexInclusive));
      }
    }
   
  }
  console.log("}----------------{");
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);