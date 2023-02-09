const userLeft = true
const userWatchingCatMeme = false

let p = new Promise((resolve,reject) => {
    let a = 1 + 1
    if(a = 2){
        resolve("Pass")
    }else{
        reject("Fail")
    }
})

p.then((message) => {
    console.log("This is in the then " + message)
}). catch((message) => {
    console.log("This is in the catch" + message)
})

//

function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if(userLeft){
            resolve({
                name: 'User Left',
                message: ':('
            })
        }else if(userWatchingCatMeme){
            resolve({
            name: "User Watching Cat Meme",
            message: "WebDevSimplified < Cat"
        })}else{
            reject("Thumbs up and Subscribe")
        }
    })
}

watchTutorialPromise().then((message) => {
   console.log("Sucess: " + message) 
}).catch((error) => {
    console.log(error.name + " " + error.message)
})

//

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve,reject) => {
    resolve("Video 2 Recoorded")
})

const recordVideoThree = new Promise((resolve,reject) => {
    resolve("Video 3 reocrded")
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
})