async function newRestaurantHandler(event) {
    event.preventDefault();

    const resName = document.querySelector('input[name="restaurant-name"]').value;
    const resPhone = document.querySelector('input[name="restaurant-phone"]').value;
    const resWebSite = document.querySelector('input[name="restaurant-site"]').value;
    const resAddress = document.querySelector('input[name="restaurant-address"]').value;
    const foodStyle = document.querySelector('input[name="food-style"]').value;
    const brickMortar = document.querySelector('input[name="brick-mortar"]').checked;
    const trailer = document.querySelector('input[name="trailer"]').checked;
    const delivery = document.querySelector('input[name="delivery"]').checked;
    const takeoutCurbside = document.querySelector('input[name="takeout-curbside"]').checked;
    const reservations = document.querySelector('input[name="reservations"]').checked;
    const onSiteParking = document.querySelector('input[name="on-site-parking"]').checked;

    const response = await fetch(`/api/restaurant`, {
        method: 'POST',
        body: JSON.stringify({
        resName,
        resPhone,
        resWebSite,
        resAddress,
        foodStyle,
        brickMortar,
        trailer,
        delivery,
        takeoutCurbside,
        reservations,
        onSiteParking
        }),
        headers: {
        'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-restaurant-form').addEventListener('submit', newRestaurantHandler);