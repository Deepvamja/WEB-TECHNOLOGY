const Website = class Geek {
    constructor(name) {
        this.name = name;
    }
    websiteName() {
        return this.name;
    }
};

const x = new Website("GeeksforGeeks");
console.log(x.websiteName());
