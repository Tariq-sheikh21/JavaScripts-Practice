// The follwing code of a bug
function addNumbers (a, b){
    return a - b 
}

let result = addNumbers(3, 4);
console.log(result);

function calculateTotalPrice(price, taxRate) {
    return price * taxRate; // Bug: Should be price + (price * taxRate)
  }
  
  const totalPrice = calculateTotalPrice(100, 0.2);
  console.log(totalPrice); // Expected: 120, Actual: 20
  
