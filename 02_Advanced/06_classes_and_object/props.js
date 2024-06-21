class user{
    constructor(name){
        this.name=name
    }
    logme(){
        log(`username is ${this.name}`);
    }
   static  createId(){
        return `123`
    }

}
const shiru=new user('shiru')
// console.log(shiru.createId())==>123

class Teacher extends user{
    constructor(name,age){
        super(name)
        this.age=age
    }
}
const student=new Teacher("shruti",21)
console.log(student);