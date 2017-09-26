function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);


//Other solution
function slasher(arr, howMany) {

  // Return string after the amount chopped off.
  return arr.slice(howMany);

}
