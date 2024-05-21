
setInterval(obtenerHora, 1000)

function obtenerHora(){
    const container = document.querySelector('.container')

    const ahora = new Date()

    let hora = ahora.getHours()
    let minutos = ahora.getMinutes()
    let segundos = ahora.getSeconds()


    hora = hora<10 ? '0' + hora : hora
    minutos = minutos<10 ? '0' + minutos : minutos
    segundos = segundos<10 ? '0' + segundos : segundos


    let horaActual = `${hora} : ${minutos} : ${segundos}`

    container.innerHTML = horaActual
}

obtenerHora()