function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let scope;
  let missingLetter = undefined;
  let startIndex = alphabet.indexOf(str.charAt(0));
  let endIndex = alphabet.indexOf(str.charAt(str.length - 1));
  
  if (endIndex == alphabet.length - 1) {
    scope = alphabet.slice(startIndex);
  }
  else {
    scope = alphabet.slice(startIndex, endIndex + 1);
  }

  console.log(scope);

  for (let i = 0; i < scope.length; i++) {
    console.log(scope[i] + " " + str[i]);
    if (scope[i] !== str[i]) {
      missingLetter = scope[i];
      break;
    }
  }

  return missingLetter;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");