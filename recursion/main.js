'use strict';

//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function looper (n) {
  while (n > -1)
    console.log(n--);
}
//2. Next, try looping just like above except using recursion
function recLooper (n) {
  if (n == -1) return;
  console.log(n);
  return looper(--n);
}

looper(7);
recLooper(7);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent (base, exp) {
  var output = 1;
  while (exp) {
    output *= base;
    exp--;
  }
  return output;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent (base, exp) {
  if (exp === 1) return base;
  return base * exponent(base, --exp);
}

console.log(exponent(2, 5));
console.log(recursiveExponent(2, 5));

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplierWrapper (arr, val) {
  var output = [];
  var fn = function () {
    if (arr.length) {
      output.push(arr.shift() * val);
      fn();
    }
    return;
  }
  fn();
  return output;
}

console.log(recursiveMultiplierWrapper([1, 2, 3, 4], 2));

function recursiveMultiplier (arr, val) {
  if (arr.length === 1) return arr[0] * val;
  return [arr.shift() * val].concat(recursiveMultiplier(arr, val));
}

console.log(recursiveMultiplier([1, 2, 3, 4], 2));

var rec = function (arr, val) {
  if (!arr.length) return;
  var last = arr.pop();
  rec(arr, val);
  arr.push(last * val);

  return arr;
}

console.log(rec([1, 2, 3, 4], 2));

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function reverseWrapperFunction (arr) {
  var reversedArr = [];

  var fn = function (orderedArr) {
    if (orderedArr.length) {
      reversedArr.push(orderedArr.pop());
      fn(orderedArr);
    }
    return;
  }
  fn(arr);
  return reversedArr;
}

console.log(reverseWrapperFunction([1, 2, 3, 4]));


function reverse (arr) {
  if (arr.length === 1) return arr[0];
  return [arr.pop()].concat(reverse(arr));
}

console.log(reverse([1, 2, 3, 4]));








