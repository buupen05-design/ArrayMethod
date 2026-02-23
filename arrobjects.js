const products = [
 { id: 1, 
    name: "Laptop",
     category: "Electronics",
      price: 1200, 
      stock: 10 },
 { id: 2, 
    name: "Phone", 
    category: "Electronics", 
    price: 800, 
    stock: 20 },
 { id: 3, 
    name: "Shoes", 
    category: "Fashion", 
    price: 150, 
    stock: 50 },
 { id: 4, 
    name: "Watch", 
    category: "Fashion", 
    price: 200,
     stock: 30 },
 { id: 5, 
    name: "Bag", 
    category: "Fashion",
    price: 100, 
    stock: 40 },
 { id: 6, 
    name: "Headphones", 
    category: "Electronics",
     price: 150, 
    stock: 15 },
 { id: 7, 
    name: "Keyboard", 
    category: "Electronics",
     price: 100,
     stock: 25 },
 { id: 8, 
    name: "T-shirt", 
    category: "Fashion", 
    price: 50, 
    stock: 100 },
 { id: 9, 
    name: "Monitor", 
    category: "Electronics",
     price: 300,
     stock: 5 },
 { id: 10,
     name: "Sunglasses",
     category: "Fashion", 
    price: 80, 
    stock: 60 },
];

// 1. Get an array of product names.
// products.map((item=>{
//     console.log(item.name)

// }))
// 2. Get an array of product prices.
// products.map((item=>{
//     console.log(item.price)
// }))
// 3. Get an array of product ids
// products.map((item =>{
//     console.log(item.id)
//     console.log(item.name)
// }))
// 4. Get an array of product stock values.
// products.map((item=>{
//     console.log(item.stock)
// }))
// 5. Increase all prices by 10%.
// let newarr = products.map((item =>{
//     console.log((item.price*10/100+item.price))
// }))
// console.log(sum)
// console.log(newarr)
// 6. Double all stock values.
// products.map((item=>{
//     console.log((item.stock*2))
// }))
// 7. Add 5 to the price of each product.
// products.map((item=>{
//     console.log(item.price+5)
// }))
// 8. Halve the stock of each product.
// let newarr=products.map((item=>{
//     console.log(item.stock/2)
//     return item.stock = item.stock/2
// }))
// console.log(newarr)   
// 10. Add 50 to stock if stock < 20.
    // let newarr = products.filter((kitem=>{
    //     return(kitem.stock<20)


    // }))
    // console.log(newarr)
// newarr.map((item=>{
//     console.log(item.stock+50)
    
// }))

// 11. Reduce price by 20% for all products.
// let newarr = products.map((item=>{
//     return item.price = item.price-item.price*20/100
// }))
// console.log(newarr)

// 12. Multiply price by 2 for products in Electronics.
let newarr = products.find((item=>{
    return item.category=="Electronics"
}))
console.log(newarr)




