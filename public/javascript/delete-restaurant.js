async function deleteFormHandler(event) {
  event.preventDefault();

  //Getting information
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ].split('?')[0];

  //Sending info to api
  const response = await fetch(`/api/restaurant/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
    alert("You've successfully deleted this restaurant!")
  } else {
    alert(response.statusText);
  }
}

//Event Listener
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteFormHandler);
