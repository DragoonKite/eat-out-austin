async function reviewFormHandler(event) {
  event.preventDefault();

  //Getting data from from
  const review_text = document
    .querySelector('textarea[name="review-body"]')
    .value.trim();

  const restaurant_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  //Sending info to api
  if (comment_text) {
    const response = await fetch('/api/review', {
      method: 'POST',
      body: JSON.stringify({
        restaurant_id,
        review_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

//Event Listener
document
  .querySelector('.review-form')
  .addEventListener('submit', reviewFormHandler);
