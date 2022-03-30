const apiURL = 'https://eewatchguy.com/wp-json/wp/v2/posts?per_page=1';

async function listPost(postContainerElementID) {

    fetch('https://eewatchguy.com/wp-json/wp/v2/posts?per_page=1')
    .then( response => response.json())
    .then( response => {
        console.log(response[0])
        let data1 = "";
        response.map((values) => {
            data1 = `
            <a href=${values.link} target="_blank">
                <figure class="blog-post-figure">
                    <img class="blog-post-img" src="./images/eeWatchGuyLogoAngle.png" alt="" width="200" height="200"></img> 
                    <div class="blog-post-container">
                        <h3 class="blog-post-content">${values.title.rendered}</h3>
                        <p class="blog-post-content">${values.date}</p>
                        <p class="blog-post-content">${values.excerpt.rendered}</p>
                    </div>
                </figure>
            </a>
            `
        })
        document.getElementById(postContainerElementID).innerHTML = data1;
    }).catch((err) => {
        console.log(err);
    });
}

listPost('blog-posts')