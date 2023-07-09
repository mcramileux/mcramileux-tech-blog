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
  
  // document.querySelector('#logout').addEventListener('click', logout); 
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#logout').addEventListener('click', logout);
  });