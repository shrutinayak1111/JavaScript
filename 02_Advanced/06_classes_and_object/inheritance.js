class user{
    constructor(name){
        this.name=name
    }
    logme(){
        log(`username is ${this.name}`);
    }
}

class Teacher extends user{
    constructor(name,age,password){
       super(name);
       this.age=age;
       this.password=password;  
    }
    addCourse(){
        console.log(` A new course was injected by ${this.name}`);
    }
}
const ok=new Teacher('shruti',21,'123pass')
ok.addCourse()
console.log(ok instanceof user);