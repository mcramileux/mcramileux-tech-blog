const editFormHandler = async (event) => {
    event.preventDefault();

    const postId = event.target.getAttribute('data-entry');
    const title = document.getElementById('blogpost-name').value;
    const content = document.getElementById('blogpost-desc').value;
    
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

const deleteFormHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data-entry')) {
        const id = event.target.getAttribute('data-entry');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
    }
};

document.querySelector('#post-btn').addEventListener('click', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteFormHandler);