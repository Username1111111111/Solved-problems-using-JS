function sentensify(str) {
  // Add your code below this line
  let newArr = [];
  let newStr = str;
  newArr = newStr.split(/\W/);
  console.log(newArr);
  newStr = newArr.join(" ");
  console.log(newStr);
  return newStr;
  
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");