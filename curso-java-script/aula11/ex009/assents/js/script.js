function verificar() {
    let pai = document.querySelector('input#teste')
    let res = document.querySelector('div#res')
    let resposta = String(pai.value)
    res.innerHTML =`<p>Você nasceu no país ${resposta}</p>`
        if (resposta === 'Brasil') {
            res.innerHTML += `<p>Você é Brasileiro</p>`;
        } else if (resposta != 'Brasil') {
            res.innerHTML += `<p>Você não é Brasileiro</p>`;
        }    
}
