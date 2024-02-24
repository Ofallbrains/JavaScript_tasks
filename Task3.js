const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
];
// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
// 2. Filter and show the product that will be expensive in the array
// 3. Calculate the full price of all products combined
// 4. Calculate the full price of all products combined and remove products that are under $10
// 5. Filter and show the product that will be start with letter b at first postion

// q1
const result = items.filter((item) => item.price <= 10)
result.map((item) =>
console.log(item.name))
// console.log(result)
// q2
const expensiveProduct = items.filter(item => item.price >= 500)
console.log(expensiveProduct)

// q3. 
const totalPrice =items.reduce((sum, item)=> sum+item.price, 0)
console.log(totalPrice)
// q4.
const totalPriceExcludingCheap = items.filter(item => item.price >=  10).reduce((sum, item) => sum + item.price,  0);
console.log(totalPriceExcludingCheap);

// q5.
const bStartingItems = items.filter(item => item.name.charAt(0).toLowerCase() === 'b');
console.log(bStartingItems);

console.log('hello')

