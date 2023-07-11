const updatePost = async (event) => {
    event.preventDefault();

    const postId = event.target.getAttribute('data-id');
    const title = document.getElementById('blogpost-name').value;
    const description = document.getElementById('blogpost-desc').value;
    
    const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // Refresh the page
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update post');
    }
}

const deletePost = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // Refresh the page
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post');
    }
    }
};

document.querySelector('#post-btn').addEventListener('click', updatePost);
document.querySelector('#delete-btn').addEventListener('click', deletePost);