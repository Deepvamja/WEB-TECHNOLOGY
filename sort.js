// Initialize a Set object
// using Set() constructor
let myset = new Set()

// Insert new elements in the
// set using add() method
myset.add(3);
myset.add(2);
myset.add(9);
myset.add(6);

// Print the values stored in set
console.log(myset);

// Create a new array to store set elements
let myarr = [];

for (let element of myset) {

    // Set elements pushed into the array
    myarr.push(element);
}

// Print the values stored in Array
console.log(myarr);

// Sort the array (default it will sort
// elements in ascending order)
myarr.sort()

// Clear the entire set using clear() method
myset.clear()

for (let element of myarr) {

    // Array elements pushed into the set
    myset.add(element);
}

// Print the values stored in set
console.log(myset);
