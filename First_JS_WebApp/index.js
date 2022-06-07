let countEL = document.getElementById("count-el")
let savetotal = document.getElementById("save-el")

let count = 0

//Function are called in the HTML page

function incremeant() {
    count += 1
    countEL.textContent = count
}

function descrease(){
    count -= 1
    countEL.textContent = count
    
}

function save(){

    let total = count + " - "

    savetotal.textContent += total 

    count = 0
    countEL.textContent = count
}
