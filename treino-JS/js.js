//As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.
//Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.

function calculaPrecoTotal(quantidade) {

let maca = 0

if(quantidade < 12){
    maca = 1.30
} else{
    maca = 1.00
}
return quantidade * maca
}

console.log(calculaPrecoTotal(11))