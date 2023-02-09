const person = {
    name: "Nishad",
    walk() {
        console.log(this)
    },
}

person.walk();

const walk = person.walk;
console.log(walk);

const address = {
    steet: "",
    city: "",
    country: ""
}

//destructuring

/* const street = address.steet;
const city = address.city;
const country = address.country */

const {street, city, country} = address;
