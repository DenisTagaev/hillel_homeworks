10 && 'undefined' || null && -1   = "undefined";
'' && true && 'false' || 0 && 7   = 0;
false && null || NaN && Infinity || 0   = 0;
10 / -0 && 9 - '9cm' || 11 % 2   = 1
