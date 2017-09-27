
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filtered = arr.filter(function(word){
    return !!word;
  });
  return filtered;
}

bouncer([7, "ate", "", false, 9]);


Other Solution:
function bouncer(arr) {
  return arr.filter(Boolean);
}
