// 				 a
// 			/	 |  \
// 	start  |	 fin
// 			\	 |  /
// 				 b

let graph = {};
graph["start"] = {};
graph["a"] = {};
graph["b"] = {};
graph["fin"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;
graph["a"]["fin"] = 1;
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

let costs = {};
costs["a"] = graph["start"]["a"];
costs["b"] = graph["start"]["b"];
costs["fin"] = Infinity;

let parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

// console.log(Object.keys( graph["start"] ));
// console.log(graph["start"]["a"]);
// console.log(graph["start"]["b"]);

function findLowestCostNode(costs) {
	let lowestCost = Infinity;
	let lowestCostNode = null;
	let currentCost;

	for (let node in costs) {
		currentCost = costs[node];
		if (currentCost < lowestCost && processed.some( (elem) => elem == node) == false ) {
			lowestCost = currentCost;
			lowestCostNode = node;
		} 
	}
	return lowestCostNode;
}

let processed = [];
let neighbors, newCost, cost;
let node = findLowestCostNode(costs);

while (node !== null) {
	cost = costs[node];
	neighbors = graph[node];
	
	Object.keys(neighbors).forEach( function(item) {
		newCost = cost + neighbors[item];
		if (costs[item] > newCost) {
			costs[item] = newCost;
			parents[item] = node;
		}
	});
	processed.push(node);
	node = findLowestCostNode(costs);
}

//--------------------------------------------------------

let fastWay = ["fin"];
let cheapCosts = [];

//Best way propper displaying
for (let i = 0, startElem = "fin"; i < Object.keys(graph).length - 1; i++) {
	if (parents[startElem] != undefined) {
		fastWay.push(parents[startElem]);
		startElem = parents[startElem];
	}
	else {
		break;
	}
}

console.log(fastWay.reverse());
for (let i = 0; i < fastWay.length - 1; i++) {
	cheapCosts.push(graph[fastWay[i]][fastWay[i+1]]);
}

console.log(cheapCosts);
console.log(costs["fin"]);