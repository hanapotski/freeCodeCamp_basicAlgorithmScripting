function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if(target === str.substr(-target.length)){
    return true;
  } else{
    return false;
  }
}

confirmEnding("Bastian", "n");


// Other solutions
function confirmEnding(string, target) {
  return (string.substr(-target.length) === target) ? true : false;
}
confirmEnding('Bastian', 'n');


function confirmEnding(string, target) {
  return string.substr(-target.length) === target;
}
confirmEnding('Bastian', 'n');


function confirmEnding(string, target) {
  // We return the method with the target as a parameter
  // The result will be a boolean (true/false)
  return string.endsWith(target); // 'Bastian'.endsWith('n')
}
confirmEnding('Bastian', 'n');
