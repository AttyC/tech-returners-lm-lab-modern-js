// Instructions can be found in rest_parameters.md

// Using Rest Parameters and some kind of forLoop (your choice!), 
// refactor this function so that it can add together any
// number of arguments and fix the failing test.

function add(...args) {
  let sum = 0;
  args.forEach(arg => sum += arg)
  return sum;
}

add(1, 2, 3, 4, 5);

module.exports = add;
