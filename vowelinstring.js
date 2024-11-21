function getVowels(string) {
    let Vowels = "aAeEiIoOuU";
    let vowelsCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(
    "The Number of vowels in -" +
        " A Computer Science Portal for :" +
        getVowels(
            "A Computer Science Portal for:"
        )
);