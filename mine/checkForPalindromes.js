
function palindrome(str) {
  var remove = /[\W_]/g;
  var lowerCaseStr = str.toLowerCase().replace(remove, "");
  var reversedStr = lowerCaseStr.split("").reverse().join("");
  if(lowerCaseStr == reversedStr){
     return true;
  } else {
    return false;
  }
}


palindrome("nope");
