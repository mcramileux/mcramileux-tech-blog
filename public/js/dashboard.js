const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blogpost-name').value.trim();
    const content = document.querySelector('#blogpost-cont').value.trim();

    if (title && content) {
        const response = await fetch("/api/post", {
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

        const response = await fetch('/api/post/${id}', {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete the post');
        }
    }
};

document
    .querySelector('.new-blogpost-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.blogpost-list')
    .addEventListener('click', delButtonHandler);