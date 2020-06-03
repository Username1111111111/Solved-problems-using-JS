function splitify(str) {
  // Add your code below this line
  let newArr = [];
  let regex = /\s|-|,|\./;
  newArr = str.split(regex);
  return newArr;
  // Add your code above this line
}
splitify("Hello World,I-am.code");