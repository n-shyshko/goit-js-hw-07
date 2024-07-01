// Variant 1
// function isEnoughCapacity(products, containerSize) {
//     let totalProducts = 0;
//     for (let product in products) {
//         if (products.hasOwnProperty(product)) {
//             totalProducts += products[product];
//         }
//     }

//     return totalProducts <= containerSize;
// }

// Variant 2
function isEnoughCapacity(products, containerSize) {
let totalProdAmount = 0;
let singleProdAmount = Object.values(products); 
    for (const product of singleProdAmount) {
        totalProdAmount += product;
        }
    if (totalProdAmount <= containerSize) {
        return true;
    } 
    return false;
};


console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false