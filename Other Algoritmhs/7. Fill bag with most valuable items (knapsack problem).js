let bagCapacity = 4;
let scale = 1;
// let tfxd = scale >= 1 ? 0 : scale < 1 && scale >= 0.1 ? 1 : scale < 0.1 && scale >= 0.01 ? 2 : 3;

let itemList = [
{name: "guitar", price: 1500, weight: 1},
{name: "recorder", price: 3000, weight: 4},
{name: "notebook", price: 2000, weight: 3},
{name: "iphone", price: 2000, weight: 1},
{name: "diamond", price: 6000, weight: 1}
];

console.log(itemList);
console.log("\nAmount of items: " + Object.keys(itemList).length);
console.log("Amount of subbags: " + (bagCapacity/scale));
console.log("Scale: " + scale);

//Price and weight table creating and zeroing
let table = Array(itemList.length).fill(0);
for (let i = 0; i < Object.keys(itemList).length; i++) {
	table[i] = Array(bagCapacity/scale).fill(0);
	// console.log(i + "  " + "[" + table[i] + "] " + itemList[i]["name"]);
}

console.log();

//loop all table and assign prices
for (let item = 0; item < table.length; item++) {
	for (let weight = 0; weight < table[item].length; weight++) {
		
		//Very first item
		if (item == 0) {
			if (itemList[item]["weight"] <= weight + 1) {
				table[item][weight] = {
					contents: [itemList[item]["name"]], 
					weights: [itemList[item]["weight"]], 
					totalPrice: itemList[item]["price"]
				};
			}
		}
		
		//Every remaining item
		else {
			//if weight are equal to subbag's size
			if (itemList[item]["weight"] == weight + 1) {
				//if current item is more valuable then previous maximum
				if (itemList[item]["price"] > table[item-1][weight]["totalPrice"]) {
					//set current item's price as new maximum in cell 
					table[item][weight] = {
						contents: [itemList[item]["name"]], 
						weights: [itemList[item]["weight"]], 
						totalPrice: itemList[item]["price"]
					};
				}
				//else set previous maximum as cell value
				else {
					table[item][weight] = table[item-1][weight]["totalPrice"];
				}
			}
			
			//if weight are less than subbag's size (have remaining weight)
			else if (itemList[item]["weight"] < weight + 1) {
				//calculate remaining weight
				let remaining = weight - itemList[item]["weight"];
				//if current item price plus remaining weight price maximum are more than previous item maximum of the same weight
				if (itemList[item]["price"] + table[item - 1][remaining]["totalPrice"] > table[item-1][weight]["totalPrice"]) {
					table[item][weight] = {
						contents: [itemList[item]["name"], table[item - 1][remaining]["contents"]], 
						weights: [itemList[item]["weight"], ...table[item - 1][remaining]["weights"]], 
						totalPrice: itemList[item]["price"] + table[item - 1][remaining]["totalPrice"]
					};
				}
				else {
					table[item][weight] = {
						contents: [table[item-1][weight]["contents"]], 
						weights: [...table[item-1][weight]["weights"]], 
						totalPrice: table[item-1][weight]["totalPrice"]
					};
				}
			}

			//if weight are more than subbags's size
			else if (itemList[item]["weight"] > weight + 1) {
				//just set previous item maximum
				table[item][weight] = {
					contents: [table[item-1][weight]["contents"]], 
					weights: [...table[item-1][weight]["weights"]], 
					totalPrice: table[item-1][weight]["totalPrice"]
				};
			}
		}
	}
	console.log(item + "  " + JSON.stringify(table[item], ["totalPrice"]) + "  " + itemList[item]["name"]);
}
console.log();

for (let item = 0; item < table.length; item++) {
	let printArr = [];
	for (let weight = 0; weight < table[item].length; weight++) {
		printArr.push("\t[" + table[item][weight]["totalPrice"] + " " + table[item][weight]["contents"] + "]");
	}
	console.log("%i %s", item, printArr);
}