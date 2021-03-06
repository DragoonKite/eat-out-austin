async function newRestaurantHandler(event) {
  event.preventDefault();

  //Pulling information from form
  const res_name = document.querySelector('input[name="restaurant-name"]')
    .value;
  const res_phone = document.querySelector('input[name="restaurant-phone"]')
    .value;
  const res_website = document.querySelector('input[name="restaurant-site"]')
    .value;
  const res_address = document.querySelector('input[name="restaurant-address"]')
    .value;
  const food_style = document.getElementById('food-style').value;
  const brick_mortar = document.querySelector('input[id="brick-mortar"]')
    .checked;
  const trailer = document.querySelector('input[id="trailer"]').checked;
  const delivery = document.querySelector('input[name="delivery"]').checked;
  const takeout_curbside = document.querySelector(
    'input[name="takeout-curbside"]'
  ).checked;
  const reservations = document.querySelector('input[name="reservations"]')
    .checked;
  const on_site_parking = document.querySelector(
    'input[name="on-site-parking"]'
  ).checked;

  //Sending information to api
  const response = await fetch('/api/restaurant', {
    method: 'POST',
    body: JSON.stringify({
      res_name,
      res_phone,
      res_website,
      res_address,
      food_style,
      brick_mortar,
      trailer,
      delivery,
      takeout_curbside,
      reservations,
      on_site_parking,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
    alert('Thank you for your submission!');
  } else {
    alert(response.statusText);
  }
}

//Event Listener
document
  .querySelector('#create-btn')
  .addEventListener('click', newRestaurantHandler);
