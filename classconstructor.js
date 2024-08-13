class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
        
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeEmail(){
        return `${this.email.toLowerCase()}`
    }
}

const code = new user("code","CODE@GMAIL.COM", "456")


console.log(code.encryptPassword());
console.log(code.changeEmail());