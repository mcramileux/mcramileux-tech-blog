const editFormHandler = async (event) => {
    event.preventDefault();

    const postId = event.target.getAttribute('data-entry');
    const title = document.getElementById('blogpost-name').value;
    const description = document.getElementById('blogpost-desc').value;
    
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // Refresh the page
        document.location.replace('/dashboard/');
    } else {
        alert('Failed to update post');
    }
}

const deleteFormHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data-entry')) {
        const id = event.target.getAttribute('data-entry');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // Refresh the page
        document.location.replace('/dashboard/');
    } else {
        alert('Failed to delete post');
    }
    }
};

document.querySelector('#post-btn').addEventListener('click', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteFormHandler);