const apiURL = 'https://eewatchguy.com/wp-json/wp/v2/posts?per_page=1';

async function listPost(postContainerElementID) {

    fetch('https://eewatchguy.com/wp-json/wp/v2/posts?per_page=1')
    .then( response => response.json())
    .then( response => {
        let data = "";
        response.map((values) => {
            data = `
            <a class="blog-post-link" href=${values.link} target="_blank">
                <figure class="blog-post-figure">
                    <div class="blog-post-img" >
                        <img src="./images/eeWatchGuyLogo.svg" alt="" width="200" height="200"></img>
                    </div>
                    <div class="blog-post-container">
                        <h3 class="blog-post-content-h3">${values.title.rendered}</h3>
                        <p class="blog-content">${values.excerpt.rendered}</p>
                    </div>
                </figure>
            </a>
            `
        })
        document.getElementById(postContainerElementID).innerHTML = data;
    }).catch((err) => {
        console.log(err);
    });
}

listPost('blog-posts')