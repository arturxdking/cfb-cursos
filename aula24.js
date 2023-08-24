// Funções Anônimas em Javascript #P1 - Curso de Javascript Moderno - Aula 24
const f=function(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}

console.log(f(10,5))

// Função contrutor anônima
const g=new Function("v1","v2","v3","return v1+v2+v3")

console.log(g(10,5,1))