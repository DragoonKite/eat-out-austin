//Signup
async function signupFormHandler(event) {
  
    //Getting info
    const displayName = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const firstName = document.querySelector('#firstName-signup').value.trim();
    const lastName = document.querySelector('#lastName-signup').value.trim();
  
    //Checking if required info is present
    if (displayName && firstName && lastName && email && password) {
      //Sending info to api
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
        displayName,
        firstName,
        lastName,
        email,
        password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

       if (response.ok) {
        res.render('/');
      } else {
        alert(response.statusText);
      }
    }
  }

//Login
async function loginFormHandler(event) {
    event.preventDefault();
  
    //Getting info
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    //Checking if needed info is present
    if (email && password) {
      //Sending info to api
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
}

//Event listeners
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
document.querySelector('#signUp').addEventListener('submit', signupFormHandler);

