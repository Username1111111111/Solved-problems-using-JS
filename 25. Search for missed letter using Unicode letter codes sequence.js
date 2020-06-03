function fearNotLetter(str) {
  let startLetterCode = str.charCodeAt(0);
  let currentCode;
 
  for (let i = 0; i < str.length; i++) {
    currentCode = str.charCodeAt(i);
    
    if (currentCode !== startLetterCode + i) {
      return String.fromCharCode(currentCode - 1);
    }
    
  }
  return undefined;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");