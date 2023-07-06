// Login
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
      const response = await fetch('/api/clients/login', {
          method: 'POST',
          body: JSON.stringify({
              email,
              password
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

// Sign up
const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (email && username && password) {
        const response = await fetch('/api/clients', {
            method: 'POST',
            body: JSON.stringify({
                email,
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);