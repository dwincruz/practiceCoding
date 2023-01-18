console.log("hello world")
console.warn("hello warning")
console.error("hello error")

//variables

/* var name = "Aldwin"
 */
let fname = "Aldwin" //cannot have a duplicate variable name but can initialize a new value
const lname = "Cruz" //cannot have a duplicate variable name nor initialize a value of a variable unless its an array, value remain unchanged. 

console.log(fname)
console.log(lname)

//datatypes

const nickname ="dwin"  //String
const age = 23          //Numbers
const  gwa = 2.5        //Numbers
const isComplete = true // Boolean 
const val = null        ///null
const unknown = undefined //undefiend

console.log(typeof nickname) //typeof it identities the datatypes of variable

let coffee 
coffee = "Capuccino"

console.log(coffee)

//string manipulation
//old concatonate 
let sentence = "my nickname is " + nickname + " my age is " + age 
console.log(sentence)
//es6 version concatonate. use backticks ` `
 sentence = `my name is ${fname} and my age is ${age}`
 console.log(sentence)
// .length use to count the total characters of a variable   
console.log(coffee.length)
// .toLowerCase(variablename) use to lowercase the string value
console.log(coffee.toLowerCase(coffee))
// .toUpperCase(variablename) use to uppercase the string value
console.log(coffee.toUpperCase(coffee))


//array

const fruits = ["Apple", "Orange" , "Mango", "Grape"]
console.log(fruits)
//show specific fruit
console.log(fruits[2])
//add new item in array. can be used to add or replace specific number item to the array 
fruits[4] = "Banana"
console.log(fruits)
//add new item in array. if cannot determine the number of item in the array 
fruits.push("Peach") //add newitem of an aray
fruits.unshift("Santol") //add item at the beginning of an array
console.log(fruits)
fruits.shift() //remove item at the beginning of an array
console.log(fruits)

fruits.pop() //removed array
console.log(fruits)


//check if varable is aray

console.log(Array.isArray(fruits))
//find an item(index)

console.log(fruits.indexOf("Apple"))

//needs two parameter. first parameter determine which place of item to start, second parameter remove number of item
fruits.splice(0,4)
console.log(fruits)


//object literals

const tao = {
    firstName: "john",
    lastName: "doe",
    age: 21,
    hobbies : ['Watching movies', 'Coding', 'Playing games'],
    familyMembers: {
        father: 'Sam',
        Mother: 'Jane',
        Sister: 'Cate'
    }
}
console.log(tao) //whole object data
console.log(tao.firstName) //display first name
console.log(tao.firstName, tao.lastName) //display first name amd firstname //more than 2
console.log(tao.hobbies[0])
console.log(tao.familyMembers.father, tao.lastName) //display fathers name and lastname

const contact = [
    {
        id: 1,
        name: "Aldwin Cruz",
        phone: 09479723907,
        isSaved: "Internal Storage"
    },
    {
        id: 2,
        name: "Fynn Cruz",
        phone: 09479722271,
        isSaved: "Internal Storae"
    },
    {
        id: 3,
        name: "Gucci Cruz",
        phone: 09578222291,
        isSaved: "SD Card"
    }
]
console.log(contact) //whole array data
console.log(contact[1].name) //display name with an index array of 1 
console.log(contact[1])

contact[3] = {
    id: 4,
    name: "Owen Cruz",
    phone: 09479722369,
    isSaved: "SD Card"

}
console.log(contact)
console.log(contact[4] = {
    id: 5,
    name: "Daniela Cruz",
    phone: 09479722291,
    isSaved: "SD Card"

})

// for loop
//declaration , condition, opration 
for(let i = 0; i<=10; i++ ){
    console.log(i)
}
//use to loop for array object

//method 1
/* for(let i = 0; i< contact.length; i++){
    console.log(contact[i].name)
} */

//method 2
//optimize version
/* for(let coon of contact ){
    console.log(coon.id)
} */

//method 3
//foreach 
contact.forEach( function(con){
    console.log(con.name)
})
//method 4
const contactphone = contact.map(function(con){
    return con.phone
})
console.log(contactphone)
//method 5
const contactSaved = contact.filter(function(con){
    return con.isSaved == "SD Card"
})
console.log(contactSaved)
//while

 let i = 0
while(i <=10){
    console.log(`while loop is ${i}`)
    i++
} 
//JavaScript Object Notation| JSON Format
const contactJSON = JSON.stringify(contact);
console.log(contactJSON);
//method 2

const contactfilter = contact.filter(function(con){
    return con.isSaved == "SD Card"
}).map(function(con){
    return con.name
})
console.log(contactfilter);


//condionals

const x = 201

if( x === 100 || x > 100){
console.log("true")
}
else if(x > 200){
console.log("value is greater than 100")
}
else{
console.log("not 100")
}
let a = 100;
let b= 300;
//function types
function GetSum(a,b){
return a+b
}
 console.log(GetSum(a,b))
 console.log(GetSum(300,250))

 //Es6 method

 const GetSummation1 =  x => x + 30 //lesser operation or function
 console.log(GetSummation1(25)) //one parameter 

 
 const GetSummation2 = (x,y) =>  x + y //less operation or function
 console.log(GetSummation2(25,78))   //two parameter


 const GetSummation3 = (x,y) => {   //more functionalities to addd inside the curly brace
    return x + y
 }
 console.log(GetSummation3(14,16))

//OOP

//constructor

//class

class Tao{
    constructor(firstname,lastname,bloodtype){
        this.fname = firstname
        this.lname = lastname
        this.bt = bloodtype

    }
    getFullName(){
        return `${this.fname} ${this.lname} ${this.bt}`
    }
    
}

//inititate an object 
const profile = new Tao("Aldwin", "cruz", "o+")
const profile2 = new Tao("Daniela", "cruz", "ab")

console.log(profile.getFullName())
console.log(profile2.getFullName())

//constructor
function person(firstname,lastname,bloodtype){
    this.fname  = firstname
    this.name  = lastname
    this.bt  = bloodtype

    this.getFullname = () => {
        return `${this.fname} ${this.lname} ${this.bt}`
    }
}
/* console.log(person.getFullname())
 */

//DOM Selection

const form = document.getElementById("form-signup")
const form2 = document.querySelector("#form-signup")
console.log(form)
console.log(form2)

const Inputs = document.querySelectorAll(".form-control")
console.log(Inputs)

Inputs.forEach(function(input){
    console.log(input)
})

//DOM manipulation

const ul = document.querySelector(".items")
/* ul.remove()  removes all content in a selected classname or idname*/
/* ul.firstElementChild.remove()
ul.lastElementChild.remove()
 */
ul.firstElementChild.textContent = "Forgot password"
ul.children[1].innerText ="2nd list"
ul.lastElementChild.innerHTML = "<h1>Big</h1>"
console.log(ul)

const btnSubmit = document.querySelector("#btnSubmit")
btnSubmit.style.background = "green"
console.log(btnSubmit)

//DOM events
const btn  = document.querySelector("#btnSubmit")
const forms = document.querySelector('.form-signup')
const userLength = document.querySelector("#username")
const passLength = document.querySelector("#password")
const confirmpassLength = document.querySelector("#confirm_password")

const userMsg = document.querySelector("#msguser")
const passMsg = document.querySelector("#msgpass")
const confirmpassMsg = document.querySelector("#msgconfirmpass")

btn.addEventListener("click",function(e){
    e.preventDefault()
    /* forms.style.border = "1px solid red" */
        console.log(userLength.min) //get minimum length of the field
        console.log(userLength.max) //get maximum length of the field
 
    if(userLength.value.length !== 0 || passLength.value.length !== 0 || passLength.value.length !== 0){
        //username validation

        let u,p,cp = 0;
        
        if(userLength.value.length >= userLength.min){
        userLength.style.borderColor = "green"
        userMsg.innerText = "Username credentials meet"
        userMsg.classList.remove('invalid')
        userMsg.classList.add('valid')
        u = 1;
        console.log("username credentials meet")
        console.log(u)
        }
        else if(userLength.value.length < userLength.min){
        userMsg.innerText = "username required"  
        /*
        option 1 to design message error
        userMsg.style.fontWeight = "bold"
        userMsg.style.color= "red"
        userMsg.style.fontFamily = "Arial"

        passMsg.innerText = "password required"
        passMsg.style.fontWeight = "bold"
        passMsg.style.color= "red"
        passMsg.style.fontFamily = "Arial"

        */
       
        /* option 2 to design message error */
        userMsg.classList.add('invalid')
        console.log("please complete username credentials")
        u = 0;
        console.log(u)
   
        }
        //password validation
        if(passLength.value.length >= passLength.min){
        passLength.style.borderColor = "green"
        passMsg.innerText = "password credentials complete"
        passMsg.classList.remove('invalid')
        passMsg.classList.add('valid')
        console.log("password credentials meet")
        p = 1
        console.log(p)
        }
        else if(passLength.value.length < passLength.min){
        passMsg.innerText ="password required"
        passMsg.classList.add('invalid')
        console.log("please complete password credentials")
        p = 0
        console.log(p)
        }
        //comfirm password validation
        if(confirmpassLength.value != passLength.value  || confirmpassLength.value.length === 0){
        confirmpassMsg.innerText = "does not match to password"
        confirmpassMsg.classList.add("invalid")
        console.log("unable to match the password ")
        cp = 0;
        console.log(cp)
        }
        else if(confirmpassLength.value === passLength.value){
        passLength.style.borderColor = "green"
        console.log("confirm password credentials match")
        confirmpassMsg.innerText = "password match"
        confirmpassMsg.classList.remove('invalid')
        confirmpassMsg.classList.add('valid')
        cp = 1
        console.log(cp)
        }
        if( u == 1 && p == 1 && cp == 1){
            forms.submit()
        }
        }
        else{
            console.log("required to fill all fields")
        }
    console.log('button was cliked')
/*     forms.submit() */

})




