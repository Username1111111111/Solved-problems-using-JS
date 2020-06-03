var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let first = firstAndLast.split(" ")[0];
  let last = firstAndLast.split(" ")[1];

  this.getFullName = function() {
    let full = first + " " + last;
    return full;
  };
  this.getFirstName = function() {
    return first;
  };
  this.getLastName = function() {
    return last;
  };
  
  this.setFullName = function(firstAndLastInput) {
    first = firstAndLastInput.split(" ")[0];
    last = firstAndLastInput.split(" ")[1];
    firstAndLast = firstAndLastInput;
  };
  this.setFirstName = function(firstInput) {
    first = firstInput;
  };
  this.setLastName = function(lastInput) {
    last = lastInput;
  };
 
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();