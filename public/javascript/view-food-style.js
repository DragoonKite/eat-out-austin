//API Call
async function foodStyleHandler(event) {
  event.preventDefault();
  //Getting info
  const food_style = this.value;

  //Sending info to api
  const response = await fetch(`/api/restaurant/fs/${food_style}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log(response);
    document.location.replace(response.url);
  } else {
    alert(response.statusText);
  }
}

//Event Listener
buttons = document.querySelectorAll('.dropdown-item');
for (button of buttons) {
  button.addEventListener('click', foodStyleHandler);
}
