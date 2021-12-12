//Anonymous Function

(function(a, b, c){

    return a + b + c

});

//Function Expression 

const sum = function(a, b){
    
    return a + b

}
const result = sum(7, 50);
console.log(result);

const anotherSum = sum;
console.log(anotherSum(100, 100)); 

let x = 3;
console.log(x);

x = sum;
console.log(x(500, 500));