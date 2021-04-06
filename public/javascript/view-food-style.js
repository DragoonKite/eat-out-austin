async function foodStyleHandler(event) {
    event.preventDefault();

    let food_style = document.querySelector('.dropdown-menu').options[selectedIndex].value

    const response = await fetch('/api/restaurant/food-style', {
        method: 'GET',
        body: JSON.stringify({
            food_style
        }),
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok){
        document.location.replace('/restaurants')
    } else{
        alert(response.statusText)
    }
}

document.querySelector('.dropdown-menu').addEventListener('change', foodStyleHandler)