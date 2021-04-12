async function deleteFormHandler(event) {
  event.preventDefault();

  //Getting Info
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  //Senfing info to api
  const response = await fetch(`/api/review/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

//Event Listener
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteFormHandler);
