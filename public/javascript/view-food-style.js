async function foodStyleHandler(event) {
    event.preventDefault();

    let e = document.querySelector('.dropdown-menu');
    let food_style = e.options[e.selectedIndex].value;

    console.log(food_style);
   const response = await fetch('/api/restaurant/fs/'+ food_style, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }) 

    /*if (response.ok){
        document.location.replace('/restaurants')
    } else{
        alert(response.statusText)
    } */

    document.location.replace('/restaurants/'+food_style)
}

document.querySelector('.dropdown-menu').addEventListener('click', foodStyleHandler)