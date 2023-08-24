// Usando o operador THIS dentro de funções em Javascript - Curso de Javascript Moderno - Aula 29
function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

// Sem arrow function ( => ) da erro mesmo por causa que ela reconhece como se fosse um novo this
    this.dados_anonimos=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const al1=new aluno("Bruno", 100)
al1.dados_anonimos()
al1.dados_arrow()