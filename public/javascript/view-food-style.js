async function foodStyleHandler(event) {
  event.preventDefault();
  const food_style = this.value;

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

/* async function foodStyleHandler(event) {
    event.preventDefault();

    let e = document.querySelector('.dropdown-menu');
    let food_style = e.options[e.selectedIndex].value;

    console.log(food_style);
   const response = await fetch('/api/restaurant/fs/'+ food_style, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }) 
    console.log(response.data)



    //console.log(response.json())
    /*if (response.ok){
        document.location.replace('/restaurants')
    } else{
        alert(response.statusText)
    } */

// document.location.replace('/restaurants/'+food_style)
/* foodStyleHandler().then(data => {
    console.log(data)
}); */

buttons = document.querySelectorAll('.dropdown-item');
for (button of buttons) {
  button.addEventListener('click', foodStyleHandler);
}
