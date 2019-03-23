let item = "Pears";
let itemPrice = 0.99;

function payment(x, y) {
 maker = x + " are " + y +".";
  return maker;
}

let priceToPay = payment(item, itemPrice);

console.log(priceToPay);

//function declaration
function functionName() {
    //function code goes here
}

//function expression
const holderVariable = function(parameters) {
    //function code goes here
}

//arrow function
const holderVariable = (parameters) => {
    //function code goes here
}