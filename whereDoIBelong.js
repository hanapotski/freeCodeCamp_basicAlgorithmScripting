
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function(a, b){
    return a - b;
  });
  return arr.indexOf(num);
}

getIndexToIns([2, 5, 10], 15);

//Other Solutions

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }

  return arr.length;
}


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var times = arr.length; // runs the for loop once for each thing in the array
  var count = 0;
  for (i=0;i<times;i++){
    if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num
    return count; // the above equals num's position in a sorted array
}

getIndexToIns([40, 60], 50);


function getIndexToIns(arr, num) {

  arr.sort(function(a, b) {
  return a - b;
  });

  var i = 0;
  while (num > arr[i]) {
  i++;
  }

  return i;
}


getIndexToIns([40, 60], 50);

function getIndexToIns(arr, num) {
  // sort and find right index
  var index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum)=> num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);
