function pairElement(str) {
  let myPair = [];
  let myDNA = [];
  let DNA;
  for (let i = 0; i < str.length; i++) {
    DNA = str.charAt(i);
    console.log("i:" + i + " DNA: " + DNA);
    switch (DNA) {
      case "A":
        myPair = ["A", "T"];
        break;
      case "T":
        myPair = ["T", "A"];
        break;
      case "C":
        myPair = ["C", "G"];
        break;
      case "G":
        myPair = ["G", "C"];
        break;
    }
    myDNA.push(myPair);
    console.log("Pair: " + myPair);
    console.log("myDNA: " + myDNA + "\n");
  }

	console.log(myDNA);
  return myDNA;
}

pairElement("GCG");