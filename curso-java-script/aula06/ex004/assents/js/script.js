var nome = window.prompt('Qual Seu nome?')
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br/>`)
document.write(`Seu nome em letras maiúsculas é ${nome.toUpperCase()}<br/>`)
document.write(`Seu nome em letras minusculas é ${nome.toLowerCase()}<br/>`)

var n1 = Number (window.prompt('Digite um numero com uma casa decimal usando ponto'))

document.write(`O numero digitado foi ${n1} incluindo duas casas decimais le fica ${n1.toFixed(3)}<br/>`)
document.write(n1.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'}))