//async is used to return a promise
//await is used to wiat and handle a promise

async function fetchUserDetails(userId){

    return{"name" : "Robin", "like" : "pizza" }
}

const user = await fetchUserDetails();
