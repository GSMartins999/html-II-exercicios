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