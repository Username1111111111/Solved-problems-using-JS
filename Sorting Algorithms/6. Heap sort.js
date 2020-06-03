//Algorithm									Time Complexity								Space Complexity
//										Best	 		 Average			Worst					  Worst
//Heapsort				Ω(n log(n))	 Θ(n log(n))	O(n log(n))			   O(1)

function heapify(array, currentIndex, rootIndex) {
  // Finding largest among root and children and then making it be at array[rootIndex]

  let largestIndex = rootIndex;
  let leftChildIndex = 2 * rootIndex + 1;
  let rightChildIndex = 2 * rootIndex + 2;
  // rootIndex = Math.floor((childIndex - 1) / 2)
	
	//left child index will be largest if bigger
  if (leftChildIndex < currentIndex && array[rootIndex] < array[leftChildIndex]) {
  	largestIndex = leftChildIndex;
  }
	
	//right child index will be largest if bigger
  if (rightChildIndex < currentIndex && array[largestIndex] < array[rightChildIndex]) {
  	largestIndex = rightChildIndex;
  }

  // If root is not largest, swap with largest and continue heapifying
  if (largestIndex != rootIndex) {
  	[array[rootIndex], array[largestIndex]] = [array[largestIndex], array[rootIndex]];
  	//recursion until all elements are in their respecting places
  	heapify(array, currentIndex, largestIndex);
  }
}

function heapSort(array) {
	let maxIndex = array.length;

	// Build max heap (root is always bigger than child, but not properly sorted yet the whole heap)
	for (let rootIndex = maxIndex; rootIndex >= 0; rootIndex--) {
		heapify(array, maxIndex, rootIndex);
	}
	
	//actual sorting
	for (let currentIndex = maxIndex - 1; currentIndex >= 0; currentIndex--) {
		// swap largest (array[0]) with the end of array that was not sorted yet
    [array[currentIndex], array[0]] = [array[0], array[currentIndex]];
    // heapify array again to make array[0] be largest
    heapify(array, currentIndex, 0);
  }
}

let testArr = [0, 0, 105, 22, 1, 54, 52, -53, 12, -44, 0, 200, 23, 22, 95, 78, -52];
console.log(testArr);

// let rowNumber = Math.ceil(Math.log2(testArr.length));
// let i = 0;
// console.log(`${("\t").repeat(15)}${testArr[i]}`);
// console.log(`${("\t").repeat(7)}${testArr[2*i+1]}\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t${testArr[2*i+2]}`);
// console.log(`${("\t").repeat(3)}${testArr[2*(2*i+1)+1]}\t\t\t\t\t\t\t${testArr[2*(2*i+1)+2]}\t\t\t\t\t\t\t${testArr[2*(2*i+2)+1]}\t\t\t\t\t\t\t${testArr[2*(2*i+2)+2]}`);
// console.log(`${("\t").repeat(1)}${testArr[2*(2*(2*i+1)+1)+1]}\t\t\t${testArr[2*(2*(2*i+1)+1)+2]}\t\t\t${testArr[2*(2*(2*i+1)+2)+1]}\t\t\t${testArr[2*(2*(2*i+1)+2)+2]}\t\t\t${testArr[2*(2*(2*i+2)+1)+1]}\t\t\t${testArr[2*(2*(2*i+2)+1)+2]}\t\t\t${testArr[2*(2*(2*i+2)+2)+1]}\t\t\t${testArr[2*(2*(2*i+2)+2)+2]}`);
// console.log(`${("\t").repeat(0)}${testArr[2*(2*(2*(2*i+1)+1)+1)+1]}\t${testArr[2*(2*(2*(2*i+1)+1)+1)+2]}`);
// console.log();

heapSort(testArr);
console.log(testArr);

// console.log();
// console.log(`${("\t").repeat(15)}${testArr[i]}`);
// console.log(`${("\t").repeat(7)}${testArr[2*i+1]}\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t${testArr[2*i+2]}`);
// console.log(`${("\t").repeat(3)}${testArr[2*(2*i+1)+1]}\t\t\t\t\t\t\t${testArr[2*(2*i+1)+2]}\t\t\t\t\t\t\t${testArr[2*(2*i+2)+1]}\t\t\t\t\t\t\t${testArr[2*(2*i+2)+2]}`);
// console.log(`${("\t").repeat(1)}${testArr[2*(2*(2*i+1)+1)+1]}\t\t\t${testArr[2*(2*(2*i+1)+1)+2]}\t\t\t${testArr[2*(2*(2*i+1)+2)+1]}\t\t\t${testArr[2*(2*(2*i+1)+2)+2]}\t\t\t${testArr[2*(2*(2*i+2)+1)+1]}\t\t\t${testArr[2*(2*(2*i+2)+1)+2]}\t\t\t${testArr[2*(2*(2*i+2)+2)+1]}\t\t\t${testArr[2*(2*(2*i+2)+2)+2]}`);
// console.log(`${("\t").repeat(0)}${testArr[2*(2*(2*(2*i+1)+1)+1)+1]}\t${testArr[2*(2*(2*(2*i+1)+1)+1)+2]}`);

// let startTab = [];
// for (let i = 0; i < rowNumber; i++) {
// 	if (i != 0 ) {
// 		startTab.push(startTab[i-1]*2+1);
// 	}
// 	else {
// 		startTab.push(0);
// 	}
// }
// startTab.reverse();
// console.log(startTab);

//https://evileg.com/ru/post/463/
//https://www.youtube.com/watch?v=Gzlxq2uXb8o