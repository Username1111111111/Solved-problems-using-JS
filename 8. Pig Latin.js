function translatePigLatin(str) {
  let pigLatin = "";
  
  let consonantRegex = /^[qwrtypsdfghjklzxcvbnm]+/;
  let vowelRegex = /^[euioa]+/;
  let noVowelRegex = /[euioa]+/g;
  let soloEndVowelRegex = /^[qrtpsfghjklzxcvbnmy]+[euioa]{1}$/;
  let endVowelRegex = /[euioa]{1}$/;
 
  let way = "way";
  let ay = "ay";

  if (soloEndVowelRegex.test(str) == true) {
    pigLatin += str.match(endVowelRegex) + str.match(consonantRegex) + ay;
    console.log("soloEndVowelRegex");
  }
  
  else if (noVowelRegex.test(str) == false) {
    pigLatin += str + ay;
    console.log("noVowelRegex");
  }
 
  else if (consonantRegex.test(str) == true) {
    pigLatin += str + str.match(consonantRegex) + ay;
    pigLatin = pigLatin.replace(consonantRegex, "");
    console.log("str.match(consonantRegex): " + str.match(consonantRegex));
    console.log("consonantRegex");
  }
  
  else if (vowelRegex.test(str) == true ) {
    pigLatin += str + way;
    console.log("vowelRegex");
  }

  console.log(str);
  console.log(pigLatin + "\n");
  
  return pigLatin;
}

translatePigLatin("schwartz");
translatePigLatin("glove");
translatePigLatin("algorithm")
translatePigLatin("qqqqqqqqqe");
translatePigLatin("ssssssssss");
translatePigLatin("ahhhhhhhhh");
 