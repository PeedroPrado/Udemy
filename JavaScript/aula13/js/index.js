// alert, confirm, prompt


let numero = prompt("Digite um número")
let numero2 = prompt("Digite outro número")

numero = Number(numero);
numero2 = Number(numero2);


alert(`A soma de ${numero} + ${numero2} é igual a ${numero + numero2}`);

if (confirm("Você quer continuar?")) {
    alert("Você escolheu continuar!");
}  else {
    alert("Você escolheu não continuar!");
} 