//Map Function 
/* const names = ["Nishad", "Sanju", "Ruwin", "Kevin"];

const newNames = names.map(function(name){
    return "Mr. " + name;
})

console.log(newNames); */

const numbers = [2, 3, 4, 5, 6, 7]

const newNumbers = numbers.map(function(num){
    return 10 * num;
})

console.log(newNumbers);

//Filter Fucntion

const age = [13, 15, 18, 24, 45, 65, 87]

const adults = age.filter(function(arr){
    return arr >= 18
})

console.log(adults)

const kids = age.filter(function(arr){
    return arr <= 18
})

console.log(kids)

//ForEach Method

const differentnames = ["kevin", "Ruwin", "Kumar", "Raja"]

differentnames.forEach(function(names){
    console.log(names + " Kosala");
})
