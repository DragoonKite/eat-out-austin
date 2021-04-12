async function editReviewHandler(event) {
  event.preventDefault();

  const review_content = document.getElementById('review-text').value.trim();

  console.log(review_content);
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
    //   console.log(body);
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
    alert("Review successfully submitted!")
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.edit-review-form')
  .addEventListener('submit', editReviewHandler);
