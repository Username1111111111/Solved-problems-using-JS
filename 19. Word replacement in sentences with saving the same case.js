function myReplace(str, before, after) {
  let indextOfWord = str.search(before);
  let upperCaseRegex = /[QWERTYUIOPASDFGHJKLZXCVBNM]{1}/;
  if (upperCaseRegex.test(str.charAt(indextOfWord)) == true) {
    let upperAfter = after.charAt(0).toUpperCase() + after.slice(1);
    str = str.replace(before, upperAfter);
  }
  else {
    str = str.replace(before, after);
  }
  console.log(indextOfWord);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");