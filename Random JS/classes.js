class Mobile{
    phoneModel = "OnePlus"
    unlockPIN = 1234

    makeCall(){
        caonsole.log("Calling Someone...")
    }
    sendSMS(){
        console.log("Sending...")
    }
}

const myMobile = new Mobile()

myMobile.sendSMS()