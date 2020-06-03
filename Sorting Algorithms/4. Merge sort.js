//Algorithm									Time Complexity						   Space Complexity
//										Best		  	Average			  Worst					Worst
//Mergesort				Ω(n log(n)) 	Θ(n log(n))	  O(n log(n))			O(n)

function sortAndCombine(array1, array2) {
	let combinedArr = [];
	let remainingI, remainingJ;
	
	for (let i = 0, j = 0; i < array1.length && j < array2.length;) {
		if (array1[i] < array2[j]) {
			combinedArr.push(array1[i]);
			i++;
			remainingI = i;
		}
		else {
			combinedArr.push(array2[j]);
			j++;
			remainingJ = j;
		}
	}

  return [...combinedArr, ...array1.slice(remainingI), ...array2.slice(remainingJ)];
}

function mergeSort(array) {
	//Actualy recursively "split in half" and then call "sort an combine"
	if (!array || !array.length) {
		return null;
	}
	if (array.length <= 1) {
		return array;
	}
	
	let middleIndex = Math.floor(array.length/2);
	return sortAndCombine(mergeSort(array.slice(0, middleIndex)), mergeSort(array.slice(middleIndex)));		
}

let testArr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(testArr);
console.log(mergeSort(testArr));
// mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);