// Praticando sobre addEventListener em Javascript #P2 - Curso de Javascript Moderno - Aula 35
const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn_copiar")
const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado")
// .toggle serve para alternar, se já estiver selecionado ele tira, se não tiver ele coloca
    })
})

btn_transferir.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})