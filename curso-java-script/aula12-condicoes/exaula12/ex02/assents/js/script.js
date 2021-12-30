function verificar() {
    let data = new Date()
    let ano = data.getUTCFullYear()
    //abaixo duas diferentes formas de lincar as informações
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value < 1800 || fano.value > ano) {
       window.alert('[ERRO] Vefifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius ='50%';
        img.style.padding = '15px';
        if (fsex[0].checked) {
            genero = 'Gênero masculino'
            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'img/01-homem-bebe.jpg')
            } else if (idade < 11) {
                img.setAttribute('src', 'img/02-homem-crianca.jpg')
            } else if (idade < 19) {
                img.setAttribute('src', 'img/03-homem-adolecente.jpg')
            } else if (idade < 35) {
                img.setAttribute('src', 'img/04-homem-20poucos.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/05-homem-adulto.jpg')
            } else if (idade >= 60) {
                img.setAttribute('src', 'img/06-homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Gênero feminino'
            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'img/01-mulher-bebe.jpg')
            } else if (idade < 11) {
                img.setAttribute('src', 'img/02-mulher-crianca.jpg')
            } else if (idade < 19) {
                img.setAttribute('src', 'img/03-mulher-adolecente.jpg')
            } else if (idade < 35) {
                img.setAttribute('src', 'img/04-mulher-20poucos.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/05-mulher-adulta.jpg')
            } else if (idade >= 60) {
                img.setAttribute('src', 'img/06-mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'   
        res.innerHTML = `${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}