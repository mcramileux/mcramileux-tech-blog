document.getElementById('new-blogpost-form').onsubmit = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blogpost-name').value.trim();
    const description = document.querySelector('#blogpost-cont').value.trim();

    if (title && description) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create a new post');
        }
    }
};

const deletePosts = document.querySelectorAll('.delete-btn');
    deletePosts.forEach('click', async (event) => {
        console.log('click!');
        event.preventDefault();
    
        const id = button.getAttribute('data-id');
        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete the post');
        }
    }
);