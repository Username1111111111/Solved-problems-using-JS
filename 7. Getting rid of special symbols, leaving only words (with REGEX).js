function spinalCase(str) {
  let innerStr;
  let myRegex = /[A-Za-z][a-z]*[^A-Z\s_-]/g;
  let parsedStrArray = str.match(myRegex);
  innerStr = parsedStrArray.join("-").toLowerCase();
  console.log(innerStr);
  return innerStr;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");