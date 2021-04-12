async function editRestaurantHandler(event) {
  event.preventDefault();

  //GEtting information
  const res_name = document.querySelector('input[name="restaurant-name"]')
    .value;
  const res_phone = document.querySelector('input[name="restaurant-phone"]')
    .value;
  const res_website = document.querySelector('input[name="restaurant-site"]')
    .value;
  const res_address = document.querySelector('input[name="restaurant-address"]')
    .value;
  const food_style_options = document.querySelector('select[name="food-style"]').options;
  const food_style = food_style_options[food_style_options.selectedIndex].value
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

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ].split('?')[0];

  //Senfing info to api
  const response = await fetch(`/api/restaurant/${id}`, {
    method: 'PUT',
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
    document.location.replace('/dashboard/')
    alert("Restaurant information successfully updated!");
  } else {
    alert(response.statusText);
  }
}

//Event Listener
document
  .querySelector('#edit-btn')
  .addEventListener('click', editRestaurantHandler);
