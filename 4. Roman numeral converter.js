function convertToRoman(num) {
	let bigNumber = 1000000, middleNumber = 500000, smallNumber = 100000;
	let bigRomanNumber, middleRomanNumber, smallRomanNumber;
	let basicNum = num;
	let remainder;
	let countOfSmallNumbers, countOfMiddleNumbers;
	let romanStr = "";

	function stringFormer(bigNumber) {
		switch (bigNumber) {
			case 1000000:
				bigRomanNumber = "M̅";
				middleRomanNumber = "D̅";
				smallRomanNumber = "C̅";
				break;
			case 500000:
				bigRomanNumber = "D̅";
				middleRomanNumber = "C̅";
				smallRomanNumber = "L̅";
				break;
			case 100000:
				bigRomanNumber = "C̅";
				middleRomanNumber = "L̅";
				smallRomanNumber = "X̅";
				break;
			case 50000:
				bigRomanNumber = "L̅";
				middleRomanNumber = "X̅";
				smallRomanNumber = "V̅";
				break;
			case 10000:
				bigRomanNumber = "X̅";
				middleRomanNumber = "V̅";
				smallRomanNumber = "M";
				break;
			case 5000:
				bigRomanNumber = "V̅";
				middleRomanNumber = "M";
				smallRomanNumber = "D";
				break;
			case 1000:
				bigRomanNumber = "M";
				middleRomanNumber = "D";
				smallRomanNumber = "C";
				break;
			case 500:
				bigRomanNumber = "D";
				middleRomanNumber = "C";
				smallRomanNumber = "L";
				break;
			case 100:
				bigRomanNumber = "C";
				middleRomanNumber = "L";
				smallRomanNumber = "X";
				break;
			case 50:
				bigRomanNumber = "L";
				middleRomanNumber = "X";
				smallRomanNumber = "V";
				break;
			case 10:
				bigRomanNumber = "X";
				middleRomanNumber = "V";
				smallRomanNumber = "I";
				break;
			case 5:
				bigRomanNumber = "V";
				middleRomanNumber = "I";
				smallRomanNumber = "";
				break;
		}
	}

	function romanConcater(bigNumber, middleNumber, smallNumber) {
		while (basicNum != 0) {
			if (basicNum <= bigNumber && basicNum >= middleNumber) {
				stringFormer(bigNumber);
				console.log("Basis:" + " " + bigNumber + " " + middleNumber + " " + smallNumber);
				console.log("Formed" + "\t" + bigRomanNumber + "\t" + middleRomanNumber + "\t" + smallRomanNumber);
				// bigNumber 10
				if (bigNumber / 2 == middleNumber) {
					remainder = basicNum % smallNumber;
					console.log("num:" + basicNum + "\t" + "remainder:" + remainder);
					countOfSmallNumbers = (basicNum - (basicNum % smallNumber)) / smallNumber;
					console.log("countOfSmallNumbers = " + countOfSmallNumbers);
					switch (countOfSmallNumbers) {
						case 10:
							romanStr = romanStr.concat(bigRomanNumber);
							break;
						case 9:
							romanStr = romanStr.concat(smallRomanNumber).concat(bigRomanNumber);
							break;
						case 8:
							romanStr = romanStr.concat(middleRomanNumber).concat(smallRomanNumber.repeat(3));
							break;
						case 7:
							romanStr = romanStr.concat(middleRomanNumber).concat(smallRomanNumber.repeat(2));
							break;
						case 6:
							romanStr = romanStr.concat(middleRomanNumber).concat(smallRomanNumber.repeat(1));
							break;
						case 5:
							romanStr = romanStr.concat(middleRomanNumber);
							break;
						case 4:
							romanStr = romanStr.concat(smallRomanNumber).concat(middleRomanNumber);
							break;
						case 3:
							romanStr = romanStr.concat(smallRomanNumber.repeat(3));
							break;
						case 2:
							romanStr = romanStr.concat(smallRomanNumber.repeat(2));
							break;
						case 1:
							romanStr = romanStr.concat(smallRomanNumber.repeat(1));
							break;
					}
					console.log("Part of str: " + romanStr);
					basicNum = basicNum - smallNumber * countOfSmallNumbers;
					console.log("new num: " + basicNum  + "\n");
				}
				// bigNumber 5
				else if (bigNumber / 5 == middleNumber) {
					remainder = basicNum % middleNumber;
					console.log("num:" + basicNum + "\t" + "remainder:" + remainder);
					countOfMiddleNumbers = (basicNum - remainder) / middleNumber;
					console.log("countOfMiddleNumbers:" + "\t" + countOfMiddleNumbers);
					switch (countOfMiddleNumbers) {
						case 5:
							romanStr = romanStr.concat(bigRomanNumber);
							break;
						case 4:
							romanStr = romanStr.concat(middleRomanNumber).concat(bigRomanNumber);
							break;
						case 3:
							romanStr = romanStr.concat(middleRomanNumber.repeat(countOfMiddleNumbers));
							break;
						case 2:
							romanStr = romanStr.concat(middleRomanNumber.repeat(countOfMiddleNumbers));
							break;
						case 1:
							romanStr = romanStr.concat(middleRomanNumber.repeat(countOfMiddleNumbers));
							break;
					}
					console.log("Part of str: " + romanStr + "\n");
					basicNum = basicNum - middleNumber * countOfMiddleNumbers;
					console.log("basicNum: " + basicNum);
				}		
				
			}
			else {
				// bigNumber 10
				if (bigNumber / 2 == middleNumber) {
					bigNumber = bigNumber / 2;
					middleNumber = middleNumber / 5;
					smallNumber = smallNumber / 2;
					console.log("Divided by 2:" + " " + bigNumber + " " + middleNumber + " " + smallNumber);
				}
				// bigNumber 5
				else if (bigNumber / 5 == middleNumber) {
					bigNumber = bigNumber / 5;
					middleNumber = middleNumber / 2;
					smallNumber = smallNumber / 5;
					console.log("Divided by 5:" + " " + bigNumber + " " + middleNumber + " " + smallNumber);
				}
			}
		}
	}
	if (basicNum == 0) {
		console.log(num + "\t" + "=" + "\t" + romanStr + "\n");
		return romanStr;
	}
	else {
		romanConcater(bigNumber, middleNumber, smallNumber);
	}
	return romanStr;
}

// convertToRoman(2); //  should return "II".
// convertToRoman(3); //  should return "III".
// convertToRoman(4); //  should return "IV".
// convertToRoman(5); //  should return "V".
// convertToRoman(9); //  should return "IX".
// convertToRoman(12); //  should return "XII".
// convertToRoman(16); //  should return "XVI".
// convertToRoman(29); //  should return "XXIX".
// convertToRoman(44); //  should return "XLIV".
// convertToRoman(45); //  should return "XLV"
// convertToRoman(68); //  should return "LXVIII"
// convertToRoman(83); //  should return "LXXXIII"
// convertToRoman(97); //  should return "XCVII"
// convertToRoman(99); //  should return "XCIX"
// convertToRoman(400); //  should return "CD"
// convertToRoman(500); //  should return "D"
// convertToRoman(501); //  should return "DI"
// convertToRoman(649); //  should return "DCXLIX"
// convertToRoman(798); //  should return "DCCXCVIII"
convertToRoman(891); //  should return "DCCCXCI"
// convertToRoman(1000); //  should return "M"
// convertToRoman(1004); //  should return "MIV"
// convertToRoman(1006); //  should return "MVI"
// convertToRoman(1023); //  should return "MXXIII"
// convertToRoman(2014); //  should return "MMXIV"
// convertToRoman(3999); // should return "MMMCMXCIX"