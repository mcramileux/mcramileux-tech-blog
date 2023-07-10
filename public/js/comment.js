const newCommentHandler = async (event) => {
    event.preventDefault();
    
    const description = document.querySelector('#comment-desc').value.trim();
    const postId = document.querySelector('#comment-btn').getAttribute('data-id');

    if (description) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ description, postId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
       // Refresh the page
      location.reload();

    } else {
      alert('Failed to comment');
    }
  }
};

document
    .querySelector('#comment-btn').addEventListener('click', newCommentHandler);