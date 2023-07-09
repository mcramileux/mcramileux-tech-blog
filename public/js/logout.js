// followed the mini-project's solved folder
// CHECK THE ID AND CLASS SELECTOR IN HANDLEBARS
// OTHER THAN THAT, ALL CODES ARE GOOD

const logout = async () => {
    const response = await fetch('/api/clients/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document
  .querySelector('#logout') 
  .addEventListener('click', logout); 