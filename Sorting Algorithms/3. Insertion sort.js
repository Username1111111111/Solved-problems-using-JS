//Algorithm							Time Complexity			Space Complexity
//										Best	Average	Worst				Worst
//Insertion Sort	    Ω(n)	Θ(n^2)	O(n^2)	     O(1)

// swap amount = n*(n-1)/2

function insertionSort(array) {
	console.log(array);
	for (let i = 1; i < array.length; i++) {
		for (let j = i; j > 0 && array[j-1] > array[j]; j--) {
			//swap smaller array[j] with bigger array[j-1]
			array[j] = array[j-1] + array[j];
			array[j-1] = array[j] - array[j-1];
			array[j] = array[j] - array[j-1];
		}	
	}
	console.log(array);
  return array;
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
