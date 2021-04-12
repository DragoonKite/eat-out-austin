async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ].split('?')[0];

  const response = await fetch(`/api/restaurant/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteFormHandler);
