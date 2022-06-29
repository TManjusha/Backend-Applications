//sorting the characters in a string
//exersice on javascript functions
var name1 = "webmaster"
const sort = str => str. split(''). sort((a, b) => a. localeCompare(b)). join('');
console.log(sort(name1))

//exercise on javascript object
var myPenguin = {name : "Penguin", origin : "Arctic", livingarea : "Igloo"}
//displaying the name of the penguin
console.log("Hello, I am Penguin and my name is "+myPenguin.name)
//adding new property to the object
myPenguin.canFly = false
console.log(myPenguin)
//creating a method to an object
myPenguin.chirp = function(){
    console.log("CHIRP! CHIRP! Is this what penguins sound like?")
}
myPenguin.chirp()
//method with parameters
myPenguin.sayHello = function(){
    console.log("Hello, I am Penguin and my name is "+this.name)
}
myPenguin.sayHello()
//changing the penguin's  name and again calling sayHello() method
myPenguin.name = "Penguin McPenguinFace"
myPenguin.sayHello()
//adding another method fly
myPenguin.fly = function(){
    if(this.canFly)
        console.log("I can fly!")
    else
        console.log("No flying for me")
}
myPenguin.fly()
//changing the value for canFly to true
myPenguin.canFly = true
myPenguin.fly()
//writing for loop to print the properties in myPenguin
for (property in myPenguin){
    console.log(property);
}
//writing for loop to print values in myPenguin
for (property in myPenguin){
    console.log(myPenguin[property])
}
//creating a callback function
function verifyLogin(user, pwd, callback){
    if(pwd == "pwd1")
        callback(null,"Correct Login Credentials")
    else
        callback("Incorrect details",null)
}

verifyLogin("user1","pwd1",(err,result) => {
    if(err)
        console.log(err);
    else
        console.log(result);
})