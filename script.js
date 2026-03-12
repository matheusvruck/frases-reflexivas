const frases = [

"Acredite em você.",
"Cada dia é uma nova chance.",
"Pequenos passos também levam longe.",
"Grandes sonhos começam com coragem.",
"Você é mais forte do que pensa.",
"Persistência vence o talento.",
"Não pare até se orgulhar.",
"Faça hoje o que seu futuro agradecerá.",
"A disciplina constrói resultados.",
"O sucesso é construído diariamente.",
"Confie no processo.",
"A jornada também é parte da vitória.",
"Continue mesmo quando for difícil.",
"Você nasceu para evoluir.",
"A coragem vence o medo.",
"Seu esforço valerá a pena.",
"Cada tentativa te aproxima do sucesso.",
"Aprenda com cada desafio.",
"O progresso vem da consistência.",
"Nunca subestime seu potencial.",
"O impossível só demora mais.",
"Grandes coisas levam tempo.",
"Um passo de cada vez.",
"Foque no progresso.",
"O esforço de hoje é a vitória de amanhã.",
"Persistir é vencer.",
"O medo não define você.",
"Confie em si mesmo.",
"A ação vence a dúvida.",
"Seu futuro começa agora."

]

function gerarFrase(){

let numero = Math.floor(Math.random() * frases.length)

document.getElementById("quote").innerText = frases[numero]

}