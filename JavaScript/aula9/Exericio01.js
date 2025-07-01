const nome = "Pedro";
const sobreNome = "Prado";
const idade = 30;
const peso = 94.6;
const altura = 1.75;
let imc = peso / (altura * altura);
let anoNascimento = 2025 - idade;

console.log("Meu nome é ", nome, sobreNome, "tenho ", idade, "anos, meu peso é ", peso, "kg, minha altura é ", altura, "meu IMC é ", imc)
console.log(`${nome} ${sobreNome}, "nasceu no ano", ${anoNascimento}`)