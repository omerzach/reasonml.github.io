'use strict';


function fromString(i) {
  var i$1 = parseInt(i, 10);
  if (isNaN(i$1)) {
    return ;
  } else {
    return i$1;
  }
}

exports.fromString = fromString;
/* No side effect */
