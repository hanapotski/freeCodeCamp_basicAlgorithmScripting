
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray = [];
   while (arr.length > 0) {
     newArray.push(arr.splice(0, size));
   }
   return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


//Other solution
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var group = [];
  var position = 0;

  while(position < arr.length) {
    group.push(arr.slice(position, position+=size));
  }
  return group;
}
