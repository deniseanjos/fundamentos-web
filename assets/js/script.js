/*
var - escopo global
let - escopo local
const - global, não muda

Case sentetive

Formas de selecionar:

por tag: getElementByTagName()
por id: getElementeById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width= '100%'
email.style.width= '100%'
assunto.style.width= '100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    nomeOk = false
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.style.display = 'none'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    emailOk = false
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color= 'red'
    } else {
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    assuntoOk = false

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'O limite é de até 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar.')
    }
}

function mapaZomm() {
    mapa.style.width = '800px'
    mapa.style.height = '720px'
}

function mapaNormal() {
    mapa.style.width = '600px'
    mapa.style.height = '520px'
}