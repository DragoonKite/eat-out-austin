async function editRestaurantHandler(event) {
    event.preventDefault();
  
    const res_name = document.querySelector('input[name="restaurant-name"]').value;
    const res_phone = document.querySelector('input[name="restaurant-phone"]').value;
    const res_website = document.querySelector('input[name="restaurant-site"]').value;
    const res_address = document.querySelector('input[name="restaurant-address"]').value;
    const food_style = document.querySelector('input[name="food-style"]').value;
    const brick_mortar = document.querySelector('input[name="brick-mortar"]').checked;
    const trailer = document.querySelector('input[name="trailer"]').checked;
    const delivery = document.querySelector('input[name="delivery"]').checked;
    const takeout_curbside = document.querySelector('input[name="takeout-curbside"]').checked;
    const reservations = document.querySelector('input[name="reservations"]').checked;
    const on_site_parking = document.querySelector('input[name="on-site-parking"]').checked;

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/api/reastaurant/${id}`, {
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
        on_site_parking
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('.edit-restaurant-form').addEventListener('submit', editRestaurantHandler);