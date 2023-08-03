const btnConselho = document.querySelector('.advice-button')
const numeroConselho = document.querySelector('.advice-id')
const descricaoConselho = document.querySelector('.advice-description')

async function criarConselhoAleatorio() {
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    const objetoConselho = await resposta.json()
    const idConselho = `Advice #${objetoConselho.slip.id}`
    const idTexto = `"${objetoConselho.slip.advice}"`

    numeroConselho.innerHTML = idConselho
    descricaoConselho.innerHTML = idTexto
}

btnConselho.addEventListener('click', () => {
    criarConselhoAleatorio()
})

criarConselhoAleatorio()