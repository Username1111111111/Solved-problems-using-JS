function getIndexToIns(arr, num) {
	let i = 0;
	let swapTrigger = 0;
	let swap;

	while (i < arr.length) {
		if (arr[i] > arr[i + 1] && i != arr.length - 1) {
			swap = arr[i + 1];
			arr[i + 1] = arr[i];
			arr[i] = swap;
			swapTrigger = 1;
		}
		i++;
		if (i == arr.length && swapTrigger == 1) {
			i = 0;
			swapTrigger = 0;
		}
	}

	console.log(arr);
	let holyGrail;
	if (arr.length > 0) {
		for (i = 0; i < arr.length; i++) {
			if (arr[i] > num) {
				holyGrail = i;
				break;
			}

			else if (arr[i] == num) {
				holyGrail = i;
				break;
			}
			else if (num > arr[arr.length - 1]) {
				holyGrail = arr.length;
				break;
			}
		}
	}

	else { 
		holyGrail = 0;
	}

	console.log(holyGrail, num, arr.length);
	console.log();
	return holyGrail;
}

getIndexToIns([40, 60], 50);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 5, 10], 15);
getIndexToIns([], 1);