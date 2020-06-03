function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr = arr.map(x => ({"name": x["name"], "orbitalPeriod": Math.round( 2*Math.PI*Math.sqrt((Math.pow((x["avgAlt"] + earthRadius), 3))/GM))}));
  console.log(arr);
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);