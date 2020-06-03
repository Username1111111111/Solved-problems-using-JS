function rot13(str) { // LBH QVQ VG!
	let alphabetStr = "abcdefghijklmnopqrstuvwxyz";
	let alphabetArr = alphabetStr.split("");
	let shiftNumber = 13;
	let letterPositionDecoded;
	let alphabetLength = alphabetStr.length;
	// console.log(alphabetLength);
	let keywordToDecode = str;
	console.log(keywordToDecode);
	let keywordToDecodeLength = keywordToDecode.length;
	// console.log(keywordToDecodeLength+ "\n");
	let decodedkeyword = [];
	// let isLetter = false;
	let letterLowerRegex = /(?=[a-z]{1})(?![0-9]{1})(?![\s.,?!;:]{1})/;
	let letterUpperRegex = /(?=[A-Z]{1})(?![0-9]{1})(?![\s.,?!;:]{1})/;
	
	if (keywordToDecodeLength > 0) {
		for (let i = 0; i < keywordToDecodeLength; i++) {
			if (alphabetArr.indexOf(keywordToDecode.charAt(i).toLowerCase()) + shiftNumber > alphabetLength - 1) {
				letterPositionDecoded = alphabetArr.indexOf(keywordToDecode.charAt(i).toLowerCase()) + shiftNumber - alphabetLength;
			}
			else {
				letterPositionDecoded = alphabetArr.indexOf(keywordToDecode.charAt(i).toLowerCase()) + shiftNumber;
			}
			
			if (letterLowerRegex.test(keywordToDecode.charAt(i))) {
				decodedkeyword.push(alphabetStr.charAt(letterPositionDecoded).toLowerCase());
				// isLetter = true;
			}
			if (letterUpperRegex.test(keywordToDecode.charAt(i))) {
				decodedkeyword.push(alphabetStr.charAt(letterPositionDecoded).toUpperCase());
				// isLetter = true;
			}
			else {
				decodedkeyword.push(keywordToDecode.charAt(i));
				// isLetter = false;
			}

			// if (isLetter == true) {
			// 	console.log(alphabetStr.charAt(letterPositionDecoded) +"\t" + letterPositionDecoded +"\t" + alphabetArr.indexOf(keywordToDecode.charAt(i).toLowerCase()) +"\t"+ keywordToDecode.charAt(i));
			// }
			// else {
			// 	console.log(keywordToDecode.charAt(i) +"\t" + keywordToDecode.charAt(i));
			// }

			// isLetter = false;
		}
	}
	else {
		console.log("Error: String is empty");
		return;
	}
	let result = decodedkeyword.join("");
  console.log(result);
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); //should decode to FREE CODE CAMP
rot13("SERR CVMMN!"); // should decode to FREE PIZZA!
rot13("SERR YBIR?"); // should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.