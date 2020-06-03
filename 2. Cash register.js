function checkCashRegister(price, cash, cid) {
	let status = ["NONE", "INSUFFICIENT_FUNDS", "CLOSED", "OPEN"];
	let changeAmount;
	let coinsArr = [];
  let statusResult = 0; //NONE
  
  //Enough money?
  if (cash < price) {
  	console.log("Not enough money");
  	return;
  }
  else if (cash == price) {
  	console.log("No change. Equal price and payment");
  	return;
  }
  else {
  	changeAmount = cash - price;
  	changeAmount = changeAmount.toFixed(2);
  	console.log("Change must be equal to: " + changeAmount);
  }

  //Declare every coin value
  let coinValue = {
  	"ONE HUNDRED": 100,
  	"TWENTY": 20,
  	"TEN": 10,
  	"FIVE": 5,
  	"ONE": 1,
  	"QUARTER": 0.25,
  	"DIME": 0.1,
  	"NICKEL": 0.05,
  	"PENNY": 0.01
  }
  // console.log("");
  // for (let coinName in coinValue) {
  // 	console.log(coinName + ": " + coinValue[coinName]);
  // }

  //Calculate all coins amount within cid and SUM of funds
  function coinAmountRegister(coinName, value) {
  	if (value == 0) {
  		return [coinName, 0];
  	}
  	else if (value > 0) {
 			return [coinName, Math.round(value/coinValue[coinName])]; //Correction for Nickels's 40.999999999
 		}
 		else {
 			console.log("ERROR: " + "coinName:" + coinName + " value:" + value);
 			return;
 		}
 	}

 	console.log("\nHere is an amount of coins cash-in-drawer are having: ");
 	let coinAmount = [];
 	let coinSum = 0;
 	for (let i = cid.length-1; i >= 0; i--) {
 		let tempValue = coinAmountRegister(cid[i][0], cid[i][1]);
 		coinAmount[tempValue[0]] = tempValue[1];
 		coinSum += (tempValue[1] * coinValue[tempValue[0]]);
 	}
 	console.log(coinAmount);
 	console.log("Sum of coins in cid: " + coinSum);
 	let eligibleCoinSum = coinSum;
 	console.log("Eligible CoinSum: " + eligibleCoinSum);


  //Calculate change in coins from higher to lower coin and substract used coins
  let minusAmountCoins;
  if (coinSum >= changeAmount) {
  	for (let coinName in coinValue) {
  		if (coinAmount[coinName] > 0 && eligibleCoinSum != 0) {
  			if (changeAmount == coinValue[coinName]) {
  				eligibleCoinSum -= changeAmount;
  				console.log("(changeAmount == coinValue[coinName]) eligibleCoinSum: " + eligibleCoinSum);
  				changeAmount = 0;
  				coinsArr.push([coinName, coinValue[coinName]]);
  				coinAmount[coinName] -= 1;
  				console.log(coinName + " " + coinAmount[coinName] + " " + changeAmount);
  			}
  			else if (changeAmount > coinValue[coinName] && eligibleCoinSum != 0) {
	  			if (eligibleCoinSum == changeAmount) {
	  				minusAmountCoins =  changeAmount / coinValue[coinName];
	  				minusAmountCoins = Math.round(minusAmountCoins);
	  			}
	  			else {
	  				minusAmountCoins = (changeAmount - changeAmount % coinValue[coinName]) / coinValue[coinName]; //How much coins to substract
	  				minusAmountCoins = Math.round(minusAmountCoins);
	  			}
	  			if (minusAmountCoins <= coinAmount[coinName] && eligibleCoinSum != 0) {
	  				eligibleCoinSum = eligibleCoinSum - coinValue[coinName] * minusAmountCoins;
	  				eligibleCoinSum = eligibleCoinSum.toFixed(2);
	  				console.log("minusAmountCoins <= coinAmount[coinName] eligibleCoinSum: " + eligibleCoinSum);
	  				console.log("minusAmountCoins: " + minusAmountCoins);
	  				changeAmount = changeAmount - coinValue[coinName] * minusAmountCoins;
	  				changeAmount = changeAmount.toFixed(2);
	  				coinsArr.push([coinName, coinValue[coinName] * minusAmountCoins]);
	  				coinAmount[coinName] -= minusAmountCoins;
	  				console.log(coinName + " " + coinAmount[coinName] + " " + changeAmount);
	  			}
	  			else if (minusAmountCoins > coinAmount[coinName] && eligibleCoinSum != 0) {
	  				eligibleCoinSum = eligibleCoinSum - coinValue[coinName] * coinAmount[coinName];
	  				eligibleCoinSum = eligibleCoinSum.toFixed(2);
	  				console.log("minusAmountCoins > coinAmount[coinName] eligibleCoinSum: " + eligibleCoinSum);
	  				if (eligibleCoinSum != 0) {
	  					changeAmount = changeAmount - coinValue[coinName] * coinAmount[coinName];
	  					changeAmount = changeAmount.toFixed(2);
	  					coinsArr.push([coinName, coinValue[coinName] * coinAmount[coinName]]);
	  					coinAmount[coinName] = 0;
	  					console.log(coinName + " " + coinAmount[coinName] + " " + changeAmount + " eligibleCoinSum: " + eligibleCoinSum);
	  				}
	  			}
	  		}
	  		else if (changeAmount < coinValue[coinName] && eligibleCoinSum > 0) {
	  			eligibleCoinSum = eligibleCoinSum - coinValue[coinName] * coinAmount[coinName];
	  			eligibleCoinSum = eligibleCoinSum.toFixed(2);
	  			console.log("changeAmount < coinValue[coinName] eligibleCoinSum: " + eligibleCoinSum);
	  		}
	  	}
	  }
	}
	else if (coinSum < changeAmount) {
		statusResult = 1;
	}

console.log("\nAfter change: ");
console.log(coinAmount);

  //Throw message if not enough money in cash-in-drawer OR change is equal to what left OR enough money still left
  if (changeAmount != 0) {
  	statusResult = 1; //"INSUFFICIENT_FUNDS"
  }
  else if (changeAmount == 0 && coinAmount["PENNY"] == 0) {
  	statusResult = 2; //"CLOSED"
  	coinsArr = cid;
  }
  else {
  	statusResult = 3;  //"OPEN"
  }

  
  //Forming answer and change
  let change = {
  	status: status[statusResult],
  	change: coinsArr
  };
  console.log("");
  console.log(change);
  
  // Here is your change, ma'am.
  return change;
}

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
