const newCommentHandler = async (event) => {
    event.preventDefault();
    
    const content = document.querySelector('#comment-desc').value.trim();
    const postId = document.querySelector('#comment-btn').getAttribute('data-id');

    if (content) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, postId }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            if (response.ok) {
                location.reload();
            } else {
                alert(response.statusText);
            } 
        }
    }

document
    .querySelector('#comment-btn').addEventListener('click', newCommentHandler);