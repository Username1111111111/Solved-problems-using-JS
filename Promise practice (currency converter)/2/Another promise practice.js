let myBool = true;

let promise1 = function () {
	return new Promise(
	function (resolve, reject) {
		if (myBool) {
			let variable1 = "one";
			console.log("promise 1 - true");
			setTimeout( () => resolve(variable1), 3000);
		} 
		else {
			let errorDesc = new Error('Shit happens');
			console.log("promise 1 - false");
			reject(errorDesc);
		}
	}
	);
}

let promise2 = function (secretValue) {  
	variable1InPromise2 =  secretValue;  
	return new Promise(
	function (resolve, reject) {
		let variable2 = 2;
		console.log("promise 2 - true");
		console.log("variable 1: " + variable1InPromise2);
		console.log("variable 2: " + variable2 + "\n====================================\n");
		setTimeout( () => resolve([variable1InPromise2, variable2]), 3000);
	}
	);
};

let mainFunc = function () {
	promise1()
	.then(promise2)
	.then(function (arr) {
		console.log("\n" + arr[0] + "\n" + arr[1] + "\n");
	})
	.catch(function (error) {
		console.log("error");
	});
};

mainFunc();

//-----------------------------------

function myAsyncFunction(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url);
		xhr.onload = () => resolve(xhr.responseText);
		xhr.onerror = () => reject(xhr.statusText);
		xhr.send();
	});
}

//---------------------------------------