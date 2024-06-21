// ES6

class user{
    constructor(name,age,password){
        this.name=name;
        this.age=age;
this.password=password
    }
    encryptPass(){
        return `${this.password}abc`
    }
}
const chai = new user("shruti",21,"123pass")
console.log(chai); 

user.prototype.encryptPass=function(){
    return `${this.password}abcd`
}
const tea = new user("shruti",21,"123pass")
console.log(chai);
console.log(tea);