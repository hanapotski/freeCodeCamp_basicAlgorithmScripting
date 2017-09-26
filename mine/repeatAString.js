function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);


//Other solutions

function repeatStringNumTimes(string, times) {
  // Step 1. Check if times is negative and return an empty string if true
  if (times < 0) {
    return "";
  }

  // Step 2. Check if times equals to 1 and return the string itself if it's the case.
  if (times === 1) {
    return string;
  }

  // Step 3. Use recursion
  else {
    return string + repeatStringNumTimes(string, times - 1); // return "abcabcabc";
  }
  /*
    First Part of the recursion method
    You need to remember that you won’t have just one call, you’ll have several nested calls
                     times       string + repeatStringNumTimes(string, times - 1)
      1st call         3                 "abc" + ("abc", 3 - 1)
      2nd call         2                 "abc" + ("abc", 2 - 1)
      3rd call         1                 "abc" => if (times === 1) return string;
      4th call         0                  ""   => if (times <= 0) return "";
    Second part of the recursion method
      4th call will return      ""
      3rd call will return     "abc"
      2nd call will return     "abc"
      1st call will return     "abc"
    The final call is a concatenation of all the strings
    return "abc" + "abc" + "abc"; // return "abcabcabc";
  */
}
repeatStringNumTimes("abc", 3);






function repeatStringNumTimes(string, times) {
  //Step 1. If times is positive, return the repeated string
  if (times > 0) { // (3 > 0) => true
    return string.repeat(times); // return "abc".repeat(3); => return "abcabcabc";
  }

  //Step 2. Else if times is negative, return an empty string if true
  else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);
