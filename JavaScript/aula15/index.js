//               01234567
let umaString = "Um texto";

console.log(umaString[5]); // Exibe: "t"
console.log(umaString.charAt(5)); // Exibe: "t"
console.log(umaString.concat(' mais texto')); // Exibe: "Um texto mais texto"
console.log(umaString.indexOf('texto')); // Exibe: 3
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.match(/x/));
console.log(umaString.replace(/t/, '#')); // Exibe: "Outro texto"
console.log(umaString.length);
console.log(umaString.slice(0, 6)); // Exibe: "Um tex"
console.log(umaString.slice(-3)); // Exibe: "Um te"
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())