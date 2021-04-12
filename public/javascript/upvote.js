//FUTURE DEVELOPMENT

/* async function upvoteClickHandler(event) {
    event.preventDefault();
  
    //Getting Info
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    //Senfing info to api
    const response = await fetch('/api/restaurant/upvote', {
        method: 'PUT',
        body: JSON.stringify({
          restaurant_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
}

//Event Listener
document.querySelector('.upvote').addEventListener('click', upvoteClickHandler); */