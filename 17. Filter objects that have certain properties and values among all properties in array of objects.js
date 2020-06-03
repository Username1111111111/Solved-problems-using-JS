function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let collectionObject = [];
  let sourceKey = Object.getOwnPropertyNames(source);
  let collectionLength = collection.length;
  let sourceLength = Object.getOwnPropertyNames(source).length;
  console.log("collection length: " + collectionLength);
  console.log("source length: " + sourceLength);
  console.log("\nKeys to parse: ");
  
  if (sourceLength > 1) {
    for (let i = 0; i < sourceLength; i++) {
      console.log(sourceKey[i] + ": " + source[sourceKey[i]]);
    }
  }
  else {
    console.log(sourceKey + ": " + source[sourceKey]);
  }

  for (let i = 0; i < collectionLength; i++) {
    collectionObject[i] = Object.getOwnPropertyNames(collection[i]);
  }
  
  let collectionObjectLength = collectionObject.length;
  console.log("\n[+++++ Objects amount: " + collectionObjectLength + " +++++]");

  let arrayOfTruth = [];
  for (let i in collection) {
    console.log("++++++ Object:" + i + " length:" + Object.keys(collection[i]).length + " ++++++");
    for (let sKey in source) {
      console.log("\nSource: " + sKey + ":" + source[sKey]);
      for (let key in collection[i]) {
        
        console.log("Collec: " + key + ":" + collection[i][key]);
         
        if (sKey == key &&  collection[i][key] == source[sKey] ) {
          arrayOfTruth.push(true);
          console.log(true);
        }
        
      }
    }
    if (arrayOfTruth.length >= sourceLength) {
      arr.push(collection[i]);
    }
    arrayOfTruth = [];
    console.log(arr);
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });