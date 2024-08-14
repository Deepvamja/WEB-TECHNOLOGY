let arr = [10,30,90,60,70]

let minvalue  = Math.min(...arr);
let maxvalue = Math.max(...arr);

console.log(minvalue);
console.log(maxvalue);


let input = prompt("enter the numbers of array:");
let array = input.split(",").map(number)

let n = array.length;
for(let i=0;i<n-1;i++){
    for(let j=0;j<n-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp= arr[j];
            arr[j]=arr[j+1]
            arr[j+1]=temp;
        }
    }
    console.log(array);
}