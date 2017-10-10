
function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();

  for (i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) === -1)
      return false;
  }
  return true;
 }
mutation(["hello", "hey"]);

//Other solution
function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) !== -1;
    });
}
