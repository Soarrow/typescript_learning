var character = 'luigi';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
// even if we link to this file in index.html it would not console.log anything as the browser does not recognise ts
// we need to compile it into js ... typescript compiles down to an older version of js that is supported everywhere
// this is how we compile ts to js --> open terminal, go to the same directory we're in and do the following 
// tsc sandbox.ts sandbox.js
inputs.forEach(function (input) {
    console.log(input);
});
