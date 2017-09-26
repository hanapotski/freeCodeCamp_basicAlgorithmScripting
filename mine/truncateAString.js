function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3){
    return str.slice(0, num - 3) + "...";
  } else if (str.length > num && num <= 3){
    return str.slice(0,num) + "...";
  } else {
    return str;
  }
}


truncateString("A-tisket a-tasket A green and yellow basket", 11);


//Other solutions
function truncateString(str, num) {
 if(num <=3){
 return str.slice(0,num) + “…”;
 }
 if (num >= str.length){
 return str
 }
 return str.slice(0,num-3) + “…”;
}
truncateString(“A-tisket a-tasket A green and yellow basket”, 11);
