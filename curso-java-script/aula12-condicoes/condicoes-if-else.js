var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
    if (hora < 12 && hora >= 5 ) {
        console.log('Bom dia');
    } else if (hora >= 12 && hora < 18) {
        console.log('Boa tarde');
    } else if (hora >= 18 && hora <=23 ) {
        console.log('Boa Noite');
    } else if (hora >= 0 && hora <=4) {
        console.log('Seu Madrugador!');
    }