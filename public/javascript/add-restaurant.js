async function newRestaurantHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="res-name"]').value;
    const phone = document.querySelector('input[name="res-phone"]').value;
    const website = document.querySelector('input[name="res-website"]').value;
    const address = document.querySelector('input[name="res-address"]').value;
    const style = document.querySelector('input[name="food-style"]').value;
    const brickMortar = document.querySelector('input[name="brick-mortar"]').value;
    const trailer = document.querySelector('input[name="trailer"]').value;
    const delivery = document.querySelector('input[name="delivery"]').value;
    const takeout = document.querySelector('input[name="takeout-curbside"]').value;
    const reservations = document.querySelector('input[name="reservations"]').value;
    const parking = document.querySelector('input[name="on-site-parking"]').value;
  
    const response = await fetch(`/api/restaurant`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        phone,
        website,
        address,
        style,
        brickMortar,
        trailer,
        delivery,
        takeout,
        reservations,
        parking
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
      alert('Thank you for your submission')
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-restaurant').addEventListener('submit', newRestaurantHandler);