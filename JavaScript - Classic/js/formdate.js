const btnBook = document.querySelector("#bookBtn");
let departureDate = document.querySelector("#departureDate")
let returnDate = document.querySelector("#returnDate")
dateToday = new Date().toISOString().split("T")[0]

returnDate.min = dateToday
returnDate.value = dateToday
departureDate.min = dateToday
departureDate.value = dateToday

let f,t,d,r = 0;

const btnChecked = document.querySelector("#btnChecked")
const countryLabel = document.querySelector("#country")
const themeLabel = document.querySelector("#themes")
const emptyMessage = document.querySelector("#emptyMessage")

const eachDestination = document.querySelectorAll("div.each-destination")
btnBook.addEventListener("click", function(e){
    e.preventDefault()
    
    console.log("Departure: "+ departureDate.value + " Return: "+ returnDate.value)
    
        
})


btnChecked.addEventListener("change",function(e){

  
   if(e.target.checked){
        themeLabel.style.color = "#ccc"
        countryLabel.style.color ="#2196F3"
        emptyMessage.innerText =""

        
        for(let i = 0; i < eachDestination.length; i++){
            eachDestination[i].style.display ="block";
        }
         
    }
    else{
        countryLabel.style.color = "#ccc"
        themeLabel.style.color ="#2196F3"
        emptyMessage.innerText="No results found."

        for(let i = 0; i < eachDestination.length; i++){
            eachDestination[i].style.display ="none";
        }
    }

    console.log("true")
})
