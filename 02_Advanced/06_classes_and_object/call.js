function setUser(user){
    this.user=user;
}
// current excution kisi aur ko pass krta h call
// 

function createUser(user,age,password){
setUser.call(this,user);
this.age=age;
this.password=password
}
const chai=new createUser("shruti",21,"123pass")
console.log(chai);