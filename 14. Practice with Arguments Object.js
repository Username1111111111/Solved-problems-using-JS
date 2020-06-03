function addTogether(x) {
  let args = [...arguments];
  let thisType = typeof(x);
 
  console.log(args.length + " " + thisType+ "\t" + args);
  
  if (args.length == 1 && typeof(args[0]) !== "number") {
    return undefined;
  }

  if (args.length == 1 && typeof(args[0]) == "number") {
    return function singleArgumentSum(y) {
      if ( typeof(y) !== "number") {
        return undefined;
      }
      else {
        return x + y;
      }
    }
  }

  if (args.length == 2) {
    if (args.some(x => typeof(x) !== "number" ) || args.some(x => Array.isArray(x) == true ))  {
      return undefined;
    }
    else {
      return args.reduce( (accum, value) => accum += value );
    }
  }
}

addTogether(2,3);
addTogether(2)(3);
addTogether("http://bit.ly/IqT6zt");
addTogether(2, "3");
addTogether(2)([3]);