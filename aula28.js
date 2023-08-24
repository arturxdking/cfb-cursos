// Aprendendo sobre o método MAP em Javascript - Curso de Javascript Moderno - Aula 28

// const cursos=['HTML','CSS','JavaScript','PHP','React']
// cursos.map((el,i)=>{
//     console.log("Curso:" + el + " - Posição do curso:" + i)
// })

// Usando o return

// const cursos=['HTML','CSS','JavaScript','PHP','React']
// let c=cursos.map((el,i)=>{
//     return el
// })

// let el=document.getElementsByTagName("div")
// el=[...el]
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML="CFB Cursos"
// })

// const converterInt=(e)=>parseInt(e)
// const dobrar=(e)=>e*2
// let num=['1','2','3','4','5'].map(converterInt)
// console.log(num)

// const dobrar=(e)=>e*2
// let num=['1','2','3','4','5'].map(dobrar)
// console.log

const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num=['1','2','3','4','5'].map(dobrar)
console.log(num)
