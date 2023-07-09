// followed the mini-project's solved folder
// CHECK THE ID AND CLASS SELECTOR IN HANDLEBARS
// OTHER THAN THAT, ALL CODES ARE GOOD

// const newFormHandler = async (event) => {
    document.getElementById('new-project-form').onsubmit = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blogpost-name').value.trim();
    const content = document.querySelector('#blogpost-cont').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create a new post');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete the post');
        }
    }
};

// document
//     .querySelector('.new-blogpost-form') //CHECK THIS CLASS SELECTOR IN HANDLEBARS
//     .addEventListener('submit', newFormHandler); //CHECK THIS BUTTON IN HANDLEBARS

// document
//     .querySelector('.blogpost-list') //CHECK THIS CLASS SELECTOR IN HANDLEBARS
//     .addEventListener('click', delButtonHandler); //CHECK THIS BUTTON IN HANDLEBARS