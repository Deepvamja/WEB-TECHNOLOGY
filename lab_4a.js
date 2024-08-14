const faculty = ["mr.aryan","ms.shreya","mr.john"]

function displayfaculties(faculty){
    console.log("faculty:");
    for(let i=0;i<faculty.length;i++){
        console.log(`${i+1}.${faculty[i]}`);
    }
}

displayfaculties(faculty);



console.log("      ");



let i=1;
const student = ["mr.deep","mr.shah","mr.diya","mr.shreya"]

for (const key in student) {
    console.log(`${i++}.${student[key]}`);
    
}
   

console.log("");


let arr = ["perfume","bat","ball","shirt","Pants"]
i=0;

for (let value of arr) {
    console.log(`${i++}.${value}`);   
}

console.log("");

const names  = ["deep","harsh","dev","meet"]

// names.push("parth");
// console.log(names);
// names.pop()
// console.log(names);
// names.unshift("daksh");
// console.log(names);
// names.shift();
// console.log(names);u

 //names.splice(1,3);
 //console.log(names);

//prod = names.slice(1,3);
//console.log(prod);

 names.sort();
console.log(names);




