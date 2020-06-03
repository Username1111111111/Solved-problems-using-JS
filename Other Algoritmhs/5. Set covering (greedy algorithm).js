let stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

// console.log(stations);
// console.log();
// stations["kthree"].add("ca");
// console.log(stations["kthree"].has("ca"));
// console.log(stations["kthree"].has("ut"));
// console.log(stations["kthree"]);
// console.log(stations["kthree"].entries());
// console.log(stations["kthree"].keys());
// console.log(stations["kthree"].values());

let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
let finalStations = new Set();

while (statesNeeded.size > 0) {
	let bestStation = null;
	let statesCovered = new Set();
	

	for (let station in stations) {
		let states = stations[station];
		// Set intersection
		let covered = new Set([...statesNeeded].filter( (state) => states.has(state) ));
	
		if (covered.size > statesCovered.size) {
			bestStation = station;
			statesCovered = covered;
		}		
	}
	// Set difference (substraction)
	statesNeeded = new Set([...statesNeeded].filter( (state) => !statesCovered.has(state) ));
	finalStations.add(bestStation);
}

console.log();
console.log(finalStations);

//---------------------------

// function isSuperset(set, subset) {
//     for (var elem of subset) {
//         if (!set.has(elem)) {
//             return false;
//         }
//     }
//     return true;
// }

// function union(setA, setB) {
//     var _union = new Set(setA);
//     for (var elem of setB) {
//         _union.add(elem);
//     }
//     return _union;
// }

// function intersection(setA, setB) {
//     var _intersection = new Set();
//     for (var elem of setB) {
//         if (setA.has(elem)) {
//             _intersection.add(elem);
//         }
//     }
//     return _intersection;
// }

// function difference(setA, setB) {
//     var _difference = new Set(setA);
//     for (var elem of setB) {
//         _difference.delete(elem);
//     }
//     return _difference;
// }

//---------------------------