// 1. Write a function that filters out even numbers from an array.
// let arr = [1,2,3,4,5,6]
// newarr =arr.filter((item)=>{
//     return (item%2==0)
// })
// console.log(newarr)

// 2. Filter an array to include only odd numbers.
// let arr = [1,2,3,4,5,6]
// newarr = arr.filter((item=>{
//     return(item%2!==0)
// }))
// console.log(newarr)

// 3. Given an array of strings, filter out strings that have more than 3 characters.
// let arr = ["Bhupen","Shyam","ram","sam"]
// let newarr= arr.filter((item)=>{
//     return (item.length>3)

// })
// console.log(newarr)

// 4. Write a function that filters out negative numbers from an array.
// let arr= [1,2,-3,-5,6,7]
// let newarr= arr.filter((item)=>{
//     return (item<0)
// })
// console.log(newarr)
// 5. Given an array of boolean values, filter out the `true` values.
// let arr = [true,false,true]
// let newarr =arr.filter((item)=>{
//     return (item==false)
// })
// console.log(newarr)

// 6. Filter an array of strings to include only those that contain the letter 'a'.
// let arr = ["bhupen","Ram","shAm"]
// let newarr=arr.filter((item)=>{
//     return (item.toLowerCase().includes("a"))
// })
// console.log(newarr)

// 7. Filter an array of numbers to return only those greater than 5.
let arr = [1,2,3,4,5,6,7,8]
let newarr= arr.filter((item)=>{
    return (item>5)
})
console.log(newarr)

// 8. Write a function that filters out empty strings from an array.
// let arr = ["Ram" ,"", "Rak" ,"ras"]
// let newarr =arr.filter((item)=>{
//     return (item.length>0)
// })
// console.log(newarr)

// 9. Write a function that maps an array of numbers to an array where each number is doubled.
// let arr =[2,3,4,5,6,7]
// let newarr = arr.map((item)=>{
//     return (item*2)
// })
// console.log(newarr)
// 10. Convert an array of numbers into an array of strings using `map`.
// let arr = [1,2,3,4,5]
// let newarr = arr.map((item)=>{
//     return (item.toString())
// })
// console.log(newarr)

// 11. Write a function that converts an array of strings to uppercase using `map`.
// let arr = ["apple","ball"]
// let newarr = arr.map((item)=>{
//     return (item.toUpperCase())
// })
// console.log(newarr)

// 12. Given an array of numbers, map it to an array of `true` (if the number is positive) or `false` (if the
// number is negative).
// const negativeOrPositive = (arr) => {
//   return arr.map((num) => {
//     if (num >= 0) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

// console.log(negativeOrPositive([-25, 10, -3, 5]));

// 13. Write a function that adds 1 to each number in an array using `map`.
// const add =(a)=>{
//     return a.map((item)=>{
//         return (item+1)
//     })
// }
// console.log(add([2,3,4,5]));
// 14. Given an array of strings, return an array of the first letter of each string using `map`.
// let words = ["apple", "banana", "cherry"];

// let newarr = words.map(item => {
//     return (item[0])
// });

// console.log(newarr);

// 15. Convert an array of strings to an array of their lengths using `map`.
// let arr = ["apple","ball"]
// let newarr = arr.map((item)=>{
//     console.log(item)
    // return (item.length)
// })
// console.log(newarr)

// 16. Write a function that squares each number in an array using `map`.
// let arr = [2,3,4,5,6]
// let newarr = arr.map((item=>{
//     return(item*2)
// }))
// console.log(newarr)

// 17. Use `forEach` to log each element of an array to the console.
// let arr = [1,2,3,4]
//arr.forEach(item => {
//     console.log(item)
    
//     // return (item)
    
// });

// 18. Write a function that uses `forEach` to calculate the sum of an array of numbers.
// let arr = [1,2,3,4]
// let sum = 0
//arr.forEach(item =>{
//     console.log(item)
//     return (sum = sum +item)
// });
// console.log(sum)

// 19. Use `forEach` to multiply each number in an array by 2 and log the results.
// let arr = [1,2,3,4,5,6]
// arr.forEach((item=>{
//     // console.log(item)
//     console.log((item*2))
// }))

// 20. Use `forEach` to log each string in an array in uppercase.
// let arr = ["bhpen","ram"]
// arr.forEach((item=>{
//     console.log(item.toUpperCase())
// }))
// 21. Use `forEach` to add an exclamation mark to each string in an array and log the new strings.
// let arr = ["bhupen","ram"]
// arr.forEach((item =>{
//     console.log("!"+item)
// }))

// 22. Use `forEach` to log the index and value of each element in an array.

// let arr = [1,2,3,4,5]

// arr.forEach((item=>{
//     console.log(item)
// }))

// 23. Use `forEach` to log only the odd numbers from an array.
// let arr = [1,2,3,4,5]
// arr.forEach((item=>{
//     if(item%2!==0){
//         console.log(item)
//     }
// })

// )
// 24. Write a function that uses `forEach` to log numbers greater than 10 from an array.
// let arr = [1,3,43,12,4,5,5,67,13]
// arr.forEach((item=>{
//     if(item>10){
//         console.log(item)
//     }
// }))
// 25. Use `forEach` to concatenate all strings in an array into a single string and log it.
// let arr = ["ring","king","sing"]
// arr.forEach((item=>{
//     console.log(item.concat())
// }))
