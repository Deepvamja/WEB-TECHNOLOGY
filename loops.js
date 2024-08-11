// for of loop

const arr = [1,2,3,4,5]

for (const str of arr) {
    console.log(num);   
}

const greeting = "hello world"
for (const greet of greeting) {
    console.log(`each char is  ${greet}`);   
}


// Maps

const map =  new Map()
map.set('in',"india")
map.set('fr',"france")

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':',value);  
}


// for in loop

const myobject = {
    game1: 'football',
    game2: 'cricket',
    game3:  'baseball'
}


const programming = ["js","java","c++"]


for (const key in programming) {
    console.log(programming[key]);
    
}


// for each loop


// 1
const coding =["html","css","python","bootstrap"]

coding.forEach(  function (value) {
    console.log(value);

} )

// 2


coding.forEach( (value) => {
    console.log(value);

})

// 3

function printme(value){
    console.log(value);
}

coding.forEach(printme)

// 4


coding.forEach((value,index,arr)=>{
    console.log(value,index,arr);
})


