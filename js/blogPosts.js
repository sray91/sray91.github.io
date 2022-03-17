const apiURL = 'https://eewatchguy.com/wp-json/wp/v2/posts?per_page=1';
const webURL = 'https://eewatchguy.com';

async function fetchPosts() {
    try {
        const response = await fetch(`${apiURL}`, { method: 'GET'});

        if (!response.ok) {
            throw new Error(`Failed to fetch post: ${response.status}`)
        }
        return await response.json();
    } catch(e) {
        console.log(e);
    }
}

function listPost(postContainerElementID) {
    const postContainerElement = document.getElementById(postContainerElementID);

    if (!postContainerElement) {
        return;
    }

    fetchPosts()
    .then(posts => {
        if (!posts) {
            postContainerElement.innerHTML = 'No posts available';
            return;
        }
        postContainerElement.appendChild(postElement(posts));
    })
    .catch(e => {
        console.log(e);
    })
}

function postElement(post) {
    const titleElement = document.createElement('h2');
    const bodyElement = document.createElement('p');
    titleElement.innerHTML = post.title.rendered;
    bodyElement.innerHTML = post.content.rendered;
} 