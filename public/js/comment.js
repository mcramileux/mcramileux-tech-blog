// followed the mini-project's solved folder
// CHECK THE ID AND CLASS SELECTOR IN HANDLEBARS

const newCommentHandler = async (event) => {
    event.preventDefault();
    
    const description = document.querySelector('#comment-desc').value.trim();
    const postId = document.getElementById('blogpost-id'); //CHECK THIS LINE IN HANDLEBARS
    
    console.log(blogpost_id); //CHECK THIS LINE IN HANDLEBARS

    if (description) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ description, postId }), //CHECK THIS LINE IN HANDLEBARS
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (response.ok) {
                fetch('/api/posts/' + blogpost_id, { //CHECK THIS LINE IN HANDLEBARS
                    method: 'GET',
                });
                window.location.reload();
            } else {
                alert('Failed to create comment');
            } 
        })
    }
}

document
    .querySelector('.new-comment-form') //CHECK THIS CLASS SELECTOR IN HANDLEBARS
    .addEventListener('submit', newCommentHandler); //CHECK THIS BUTTON