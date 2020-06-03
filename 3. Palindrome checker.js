function palindrome(str) {
  //checking emptiness
  if (str === "") {
  	return false;
  }
  else {
  	//cleaning from special characters, spaces and numbers, turning into same case
  	let strArr = str.toLowerCase().split("").filter(elem => elem.match(/(?=[\w\S]+)(?=[^_.,:/-]+)(?=[^)(]+)/));
  	console.log(strArr + "\r");
  	
  	if (strArr.length % 2 == 0) {
  		for (let i = 0; i < (strArr.length)/2; i++) {
  			// console.log(i + "\t" + strArr[i] + "\t" + strArr[strArr.length - 1 - i]);
  			if (strArr[i] != strArr[strArr.length - 1 - i]) {
  				console.log("odd false");
  				return false;
  			}
  			else if (i + 1 == (strArr.length)/2) {
  				console.log("odd true");
  				return true;
  			}
  		}
  	}
  	else {	
  		for (let i = 0; i < (strArr.length - 1)/2; i++) {
  			if (strArr[i] != strArr[strArr.length - 1 - i]) {
  				console.log("even false");
  				return false;
  			}
  			else if (i + 1 == (strArr.length - 1)/2) {
  				console.log("even true");
  				return true;
  			}
  		}	
	  }
	}
}

/*palindrome("eye"); // should return a boolean.
palindrome("eye"); // should return true.
palindrome("_eye"); // should return true.
palindrome("race car"); // should return true.
palindrome("not a palindrome"); // should return false.
palindrome("A man, a plan, a canal. Panama"); // should return true.
palindrome("never odd or even"); // should return true.
palindrome("nope"); // should return false.
palindrome("almostomla"); // should return false.
palindrome("My age is 0, 0 si ega ym."); // should return true.
palindrome("1 eye for of 1 eye."); // should return false.*/
palindrome("0_0 (: /-\ :) 0-0"); // should return true.
/*palindrome("five|\_/|four"); // should return false.*/