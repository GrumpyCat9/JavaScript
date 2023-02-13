async function getMenu() {
    let url = 'https://my-burger-api.herokuapp.com/burgers';
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderDishes() {
    const dishes = await getMenu();

    dishes.map(dish => {
        console.log(dish)
    });

}


renderDishes();

