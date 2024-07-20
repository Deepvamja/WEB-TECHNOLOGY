let a = [2,6,9,7,4]

//for each loop
a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})
 
console.log("                 ")





//for of loop

for (const value of a) {
    console.log(value)
    
}

console.log("                 ")





//map 

let arr = [1,3,5,7]

let newarr = arr.map((element)=>{

    return element**2
})

console.log(newarr)

console.log("                 ")





// filter

let arr1 = [1,3,5,7]

let newarr1 = arr.map((element)=>{

    return element**2
})

console.log(newarr1)
const greaterthantwo = (element)=>{
    if(element>2){
        return true
    }
    return false
}
console.log(arr1.filter(greaterthantwo))
 
console.log("                 ")






// reduce

let arr2 = [2,6,8,9]

const red = (a,b)=>{
    return a+b


}

console.log(arr2.reduce(red))






