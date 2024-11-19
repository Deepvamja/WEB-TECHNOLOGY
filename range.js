const startNum = 1;
const endNum = 8;
const numbers = Array.from({ length: endNum - startNum + 1 },
    (_, index) => startNum + index);

const startChar = 'A';
const endChar = 'G';
const CharCode1 = startChar.charCodeAt(0);
const CharCode2 = endChar.charCodeAt(0);
const characters = Array.from(
    { length: CharCode2 - CharCode1 + 1 },
        (_, index) =>
            String.fromCharCode(CharCode1 + index)
);

console.log(numbers);
console.log(characters); 
