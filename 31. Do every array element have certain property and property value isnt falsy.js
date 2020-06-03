function truthCheck(collection, pre) {
  // Is everyone being true?
  let truthy = {
    0: false,
    NaN: false,
    false: false,
    "": false,
    null: false,
    "no": false,
    undefined: false
  }
   
  return collection.every(x => x.hasOwnProperty(pre) && truthy[x[pre]] != false);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
