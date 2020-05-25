// Criar um programa que calcula a média 
// das notas entre os alunos e envia
// mensagem do cálculo da média


//const aluno01 = 'Gui'
//const notaAluno01 = 9.8

//const aluno02 = 'Luiz'
//const notaAluno02 = 10

//const aluno03 = 'Henrique'
//const notaAluno03 = 2

//const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3


// Se a média foir maior que 5, parabenizar a turma 
//if (media > 5) {
//    console.log(`A media foi de ${media}. Parabéns`)
//} else {
//    console.log(`A media é menor que 5`)
//}

/* ======================================================

OPERADORES DE COMPARAÇÃO

> Maior
< Menor
>= Maior igual a
<= Menor igual a
== Igual a
=== Igual e do mesmo tipo
!= Diferente de 
!== Diferente, inclusive do tipo

========================================================*/

// DESAFIO 1 
//const idade = 17
// verificar se a pessoa é maior igual a 18 anos 
// se sim, deixar entrar, se não, bloquear a entrada
//if(idade >= 18) {
//    console.log('Deixar entrar')
//} else {
//    console.log('Bloquear a entrada')

//}

// se a pessoa tiver 17 anos 
// avisar para voltar quando fizer 18 anos 
//if (idade === 17) {
//    console.log('Volte quando tiver 18')
//}

/* ====================================================
    OPERADORES DE LÓGICOS

    && "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira.
    || "OU" Uma das condições deve ser verdadeira
        para que a condição final seja verdadeira
    !   "NÃO" Nega uma condição
    
=====================================================*/

//console.log(5 == 5 && 6 == 6) // true
//console.log(5 == 5 && 6 != 6) // false

//console.log(5 != 5 || 6 == 6) // true
//console.log(5 == 5 || 6  != 6) // true

//console.log(!(5 > 6)) // true
//console.log(!(5 < 6)) // false

// DESAFIO 1 
//const idade = 18
// verificar se a pessoa é maior igual a 18 anos 
// se sim, deixar entrar, se não, bloquear a entrada
// se a pessoa tiver 17 anos 
// avisar para voltar quando fizer 18 anos 

//if(!(idade >= 18)  || idade === 17) {
//   console.log('Bloquear a entrada')
//} else {
//    console.log('Deixar entrar')
//}

/* ===================================================
    OPERADORES DE ARITMÉTICOS

    *   Multiplicação
    /    Divisão
    %   Resto da divisão
    +   Adição
    -   Subtração

======================================================*/

//console.log(4 * 4)
//console.log(4 / 2)
//console.log(4 % 2)
//console.log(2 + 2)
//console.log(4 - 2)

const nome = "Guilherme"
const peso = 84
const altura = 1.88

const imc = 84 / (1.88 * 1.88)
// Se o imc maior ou igual a 30 
if (peso > 30) {
    console.log('Guilherme você está acima do peso')
} else {
    console.log('Guilherme você não está acima do peso')
}