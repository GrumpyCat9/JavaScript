function triArea(base, height){
    return (base * height) / 2
}

console.log(triArea(3,2))
console.log(triArea(7,4))
console.log(triArea(10,10))

function howManySeconds(hours){
    return (hours * 60) * 60
}

console.log(howManySeconds(2))
console.log(howManySeconds(10))
console.log(howManySeconds(24))

function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}

console.log(nextEdge(8, 10))
console.log(nextEdge(5,7))
console.log(nextEdge(9,2))

function remainder(x, y) {
	return x%y
}

console.log(remainder(1,3))
console.log(remainder(3,4))
console.log(remainder(-9, 45))
console.log(remainder(5,5))

function getFirstValue(arr) {
    return arr[0]
}

console.log(getFirstValue([1, 2, 3]))
console.log(getFirstValue([80, 5, 100]))
console.log(getFirstValue([-500, 0, 50]))

function squared(a) {
	return a * a
}

console.log(squared(5))
console.log(squared(9))
console.log(squared(100))

function hello() {
	return "hello edabit.com"
}

console.log(hello())

function circuitPower(voltage, current){
    return voltage * current
}

console.log(circuitPower(230, 10))
console.log(circuitPower(110, 3))
console.log(circuitPower(480, 20))

function lessThanOrEqualToZero(num) {
	if(num > 0){
        return false
    }
    else{
        return true
    }
}

console.log(lessThanOrEqualToZero(5))

function nameString(name){
	var b = "Edabit"
	var result = name + b
  	return result
}

console.log(nameString("Mubashir"))

function calcAge(age) {
	return age * 365
}

console.log(calcAge(20))

function and(a, b) {
	if(a && b == true){
        return true
    }else if(a && b == false){
        return false
    }else{
        return false
    }
}

console.log(and(true, false))
console.log(and(true, true))