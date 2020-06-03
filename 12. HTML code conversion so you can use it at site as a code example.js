function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  htmlEntities={
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(entity => htmlEntities[entity] || entity).join('');
}

let stringgg = '<p>Click <a href="">here</a> to continue</p>';

// test here
console.log(convertHTML(stringgg));
