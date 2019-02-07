const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 },
];
    // find a product who is max under $10 
    // Result: { name: 'paper towels', price: 6.99 }
const productsUnder10Dollar = products.filter(product => product.price < 10 )
                                      .reduce((acc,product) => {
                                        if(acc.price > product.price){ 
                                              return acc 
                                            } 
                                              return product
                                       })

  
console.log(productsUnder10Dollar);


    // find the total of all value price greater than 10
    // Result: 239.97
const total = products.filter(product => product.price > 10 )
                                      .reduce((acc,product) => acc + product.price,0)
                                      .toFixed(2);

                      // toFixed is used to give fixed decimal number after .

  
console.log(total);



// ---------------------------------------------------------------------------
// Find item with dept grocery and display the total
// groceryTotal should be: 9.47
const purchaseItems = [
    {
        name: 'apples',
        dept: 'groceries',
        price: 2.49
    },
    {
        name: 'bread',
        dept: 'groceries',
        price: 2.99
    },
    {
        name: 'batteries',
        dept: 'electronics',
        price: 5.80
    },
    {
        name: 'eggs',
        dept: 'groceries',
        price: 3.99
    },
    {
        name: 't-shirts',
        dept: 'apparel',
        price: 9.99
    }
];
let groceryTotal;
groceryTotal = purchaseItems
              .filter(item => item.dept === "groceries")
              .reduce((sum,item) => sum + item.price, 0);

console.log(groceryTotal);



