//curring 
function valorFinal(taxa, preco){  //preco = preço

    return function(preco){

        return preco * (1 + taxa); 

    }
}

const nycPrecoFinal = valorFinal(0.0875);

console.log(nycPrecoFinal(25.1));
console.log(nycPrecoFinal(21.7));
console.log(nycPrecoFinal(107.9));
