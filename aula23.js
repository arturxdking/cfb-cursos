//Parâmetros REST em funções Javascript #P3 - Curso de Javascript Moderno - Aula 23
function soma(...valores){
    let tam=valores.length
    let res=0
    for(let i=0;i<tam;i++){
        res+=valores[i]
    }
    return res
}

console.log(soma(10,5,2,8))