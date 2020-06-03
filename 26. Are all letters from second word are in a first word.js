function mutation(arr) {
  var answer;
  let proveryamoe = arr[0].toLowerCase().split("");
  let shtoSoderzhit = arr[1].toLowerCase().split("");
  console.log(proveryamoe);
  console.log(shtoSoderzhit);
  
  answer = true;
  for(let i = 0; i < shtoSoderzhit.length; i++) {
    if (proveryamoe.includes(shtoSoderzhit[i]) == false) {
      answer = false;
    }
  }
  
  console.log("final answer: " + answer);
  return answer;
}

mutation(["hello", "Hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);