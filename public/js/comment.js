// followed the mini-project's solved folder
// CHECK THE ID AND CLASS SELECTOR IN HANDLEBARS
// this doesn't works

const newCommentHandler = async (event) => {
    event.preventDefault();
    
    const comment_text = document.querySelector('#comment-desc').value.trim();
    const post_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
        ];
    // const post_id = document.getElementById('#blogpost-id');
    // var post_id = dataElement.getAttribute('data-id');
    // console.log(post_id); //CHECK THIS LINE IN HANDLEBARS

    if (comment_text) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        // .then((response) => {
            if (response.ok) {
                // fetch('/api/posts/' + post_id, {
                //     method: 'GET',
                // });
                // window.location.reload();
                document.location.reload();
            } else {
                alert(response.statusText);
            } 
        }
    }

document
    .querySelector('#new-comment-form') //CHECK THIS CLASS SELECTOR IN HANDLEBARS
    .addEventListener('submit', newCommentHandler); //CHECK THIS BUTTON