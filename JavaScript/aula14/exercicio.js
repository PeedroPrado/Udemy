let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

const temp = varA; // Temporaria
varA = varB; // A = B
varB = varC; // B = C
varC = temp; // C = A

console.log(varA, varB, varC);