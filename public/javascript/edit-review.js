async function editReviewHandler(event) {
  event.preventDefault();
 
  const review_content = document.querySelector('#review-text').value;


  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

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

document
  .querySelector('#edit-btn')
  .addEventListener('click', editReviewHandler);
