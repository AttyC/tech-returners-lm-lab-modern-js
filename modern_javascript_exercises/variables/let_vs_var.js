// Instructions can be found in let_vs_let.md

// Problems with let

function count() {
  for (let i = 0; i < 5; i++) {
    console.log(i + " inside the forLoop");
  }
  // console.log(i + " outside the forLoop");
}

count(); // <---- uncomment me!

// Another problem with let is that we can overwrite it, like this:

let greeting = "Hello 😘";
greeting = "Not today, pal! 😤";

console.log(greeting); // <----- uncomment me!
