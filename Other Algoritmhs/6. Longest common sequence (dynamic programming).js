let wordA = "hish";
let wordB = "dish";
// let wordB = "Vista"; 

let longestCommonSequence = 0;
let commonPartEndPosition;
wordA = wordA.toLowerCase();
wordB = wordB.toLowerCase();

//Creating zeroed array A+1xB+1 size
let cell = Array(wordA.length + 1).fill(0);
for (let i = 0; i < wordA.length + 1; i++) {
	cell[i] = Array(wordB.length + 1).fill(0);
	console.log(cell[i]);
}

console.log();
console.log("     " + wordB.split("").join(" "));

for (let i = 0; i <= wordA.length; i++) {
	for (let j = 0; j < wordB.length; j++) {
		if (wordA[i] == wordB[j]) {
			if (cell[i][j] == 0) {
				cell[i+1][j+1]  = 1;
			}
			else {
				cell[i+1][j+1] = cell[i][j] + 1;
			}
			if (cell[i+1][j+1] > longestCommonSequence) {
				longestCommonSequence = cell[i+1][j+1];
				commonPartEndPosition = i;
			}
		}
		else {
			cell[i][j] = 0;
		}
	}
	if (i != 0) {
		console.log(wordA[i - 1] + " [" + cell[i] + "]");
	}
	else {
		console.log("  [" + cell[i] + "]");
	}
}

console.log("\n" + "Longest common sequence: " + longestCommonSequence);
console.log("Common part end position: " + commonPartEndPosition);
console.log("Common part: " + wordA.slice(commonPartEndPosition - longestCommonSequence + 1, longestCommonSequence + 1));