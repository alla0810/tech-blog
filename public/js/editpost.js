const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const user = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  console.log("user: ", user);
  console.log("password: ", password);

  if (user && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

