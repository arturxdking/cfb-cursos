//Entenda as declarações BREAK e CONTINUE em Javascript - Curso de Javascript Moderno - Aula 19

let n=0
let max=1000
let pares=0

//break

/*while(n<1000){
    console.log("CFB Cursos: " + n)
    if(n>10){
        break
    }
    n++
}

console.log("Fim do programa")
*/

//continue
for(let i=n;i<max;i++){
    if(i%2!=0){
        continue
    }
    pares++
}

console.log("Quantidade de pares: " + pares)
console.log("Fim do programa")