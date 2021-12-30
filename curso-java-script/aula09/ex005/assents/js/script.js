let p1 = document.getElementsByTagName('p')[0]
document.write(`Reescrevendo paragrafo 1: ${p1.innerText} <br/>`)

let p2 = document.getElementsByTagName('p')[0]
document.write('Reescrevendo paragrafo 1: ' + p1.innerHTML)

let d = document.getElementById('msg')
d.style.background = 'grey'