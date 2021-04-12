async function editReviewHandler(event) {
  event.preventDefault();
 
  //Getting info
  const review_content = document.querySelector('#review-text').value;


  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  //Sending info to api
  const response = await fetch(`/api/review/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      review_content
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
    alert("Success")
  } else {
    alert(response.statusText);
  }
}

//Event Listener
document
  .querySelector('#edit-btn')
  .addEventListener('click', editReviewHandler);
