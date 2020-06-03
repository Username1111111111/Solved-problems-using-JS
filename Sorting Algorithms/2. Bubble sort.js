//Algorithm							Time Complexity			Space Complexity
//										Best	Average	Worst				Worst
//Bubble Sort					Ω(n)	Θ(n^2)	O(n^2)			 O(1)

function bubbleSort(arr) {
	let _arr = [...arr];
	
	for (let i = 0, loopAgain = false; i < _arr.length; i++) {
		
		if (_arr[i] > _arr[i+1]) {
			loopAgain = true;
			_arr[i] = _arr[i] + _arr[i+1];
			_arr[i+1] = _arr[i] - _arr[i+1];
			_arr[i] = _arr[i] - _arr[i+1];
		}
		
		if (i == _arr.length - 1 && loopAgain == true) {
			loopAgain = false;
			i = 0;
		}

	}

	console.log(_arr);
	return _arr;
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);