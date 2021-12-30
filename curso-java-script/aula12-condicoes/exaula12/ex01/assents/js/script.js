function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('image')
    let data = new Date()
    //let hora = data.getHours()
    let hora = 20
  
    if (hora >= 5 && hora <=11) {
        msg.innerHTML = `Agora são ${hora} horas, bom dia!`
        img.src = 'imagens/manha.jpg'
        document.body.style.background = 'rgb(47, 100, 209)'

    } else if (hora >=12 && hora <= 17) {
        msg.innerHTML = `Agora são ${hora} horas, boa tarde!`
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'rgb(255, 200, 57)'
    } else if (hora >= 18 && hora <=23) {
        msg.innerHTML = `Agora são ${hora} horas, boa noite!`
        img.src = 'imagens/noite.jpg'
        document.body.style.background = 'rgb(200, 90, 40)'
    } else if (hora >= 0 && hora <=4) {
        msg.innerHTML = `Agora são ${hora} horas, seu madrugador!`
        img.src = 'imagens/madrugada.jpg'
        document.body.style.background = 'rgb(47, 33, 83)'
    }
}