document.querySelector("#submitInput").addEventListener("click", function(e){
    e.preventDefault()
    nameForm = document.querySelector("#nameInput").value 
    age = document.querySelector("#ageInput").value 
   
    if(nameForm === "" || age === ""){
        writeError();
           
    }
    else {
        calculateAgePrice(age)
    }
 
})

function calculateAgePrice(a){
    if (a <= 3){
        price = "Free"
    } else if (a <= 12){
        price = "$10"
    } else if (a <= 64){
        price = "$20"
    } 
    else {
        price = "$12"
    }

    console.log(price)

    writeOutput()
}

function writeOutput() {
    document.querySelector("#formOutput").innerHTML = nameForm + ", your ticket costs " + price + "."
}

function writeError() {
    document.querySelector("#formOutput").innerHTML = "Please enter Name and or Age."
}