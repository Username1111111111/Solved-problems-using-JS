let graph = {};

graph["you"] = ["alice", "bob", "claire" ];
graph["bob"] = ["anuj" , "peggy"];
graph["alice"] = ["peggy"];
graph["claire" ] = ["thom" , "jonny"];
graph["anuj"] = ["thom"];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

console.log(graph);
console.log();

function isSeller(name) {
	if (name.charAt(name.length - 1) == "m") {
		return true;
	}
	else {
		return false;
	}
}

function search(name, graph) {
	let searched = [];
	let searchQueue = [];
	let person;
	searchQueue.push(...graph[name]);
	
	while (searchQueue.length != 0) {
		person = searchQueue.shift();
		if ( searched.some( (elem) => elem == person ) == false ) {
			if (isSeller(person)) {
				console.log(person + " IS а mango seller");
				return true;
			}
			else {
				searchQueue.push(...graph[person]);
				searched.push(person);
				console.log(graph[person]);
				console.log(person + " is NOT a mango seller");
			}
		}
	}
	return false;
}

search("you", graph);