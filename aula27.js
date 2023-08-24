// Funções Geradoras em Javascript. Você precisa aprender! - Curso de Javascript Moderno - Aula 27
function* cores(){
    yield "Vermelho"
    yield "Verde"
    yield "Azul"
}
let itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

console.log(" ")

// Perguntas passando valores por parâmetro
function* perguntas(){
    const nome=yield "Qual seu nome?"
    const esporte=yield "Qual seu esporte favorito?"
    return "Seu nome é " + nome + ", seu esporte favorito é " + esporte
}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Natação').value)

console.log(" ")

// Contador com condição de pausa
function* contador(){
    let i=0
    while(true){
        yield i++
        if(i>5)
            break
    }
}
const itcont=contador()
for(let c of itcont){
    console.log(c)
}