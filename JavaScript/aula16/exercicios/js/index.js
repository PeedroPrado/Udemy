const nome = prompt("Digite o seu nome completo: ")

    document.body.innerHTML += `O seu nome é:<strong>${nome}</strong><br>`
    document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br>`
    document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br>`
    document.body.innerHTML += `Qual o primeiro indice da letra "e" no seu nome? <strong>${nome.indexOf("e")}</strong><br>`
    document.body.innerHTML += `Qual o ultimo indice da letra "o" no seu nome? <strong>${nome.lastIndexOf("o")}</strong><br>`
    document.body.innerHTML += `As ultimas tres letras do seu nome são:<strong>${nome.slice(-3)}</strong><br>`
    document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split('  ')}</strong><br>`
    document.body.innerHTML += `Seu nome com as letras maiúculas <strong>${nome.toUpperCase()}</strong><br>`
    document.body.innerHTML += `Seu nome com as letras minúsculas <strong>${nome.toLowerCase()}</strong><br>`