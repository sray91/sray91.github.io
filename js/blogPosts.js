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
                <h3>${values.title.rendered}</h3>
                <p>${values.excerpt.rendered}</p>
            </a>
            `
        })
        document.getElementById(postContainerElementID).innerHTML = data1;
    }).catch((err) => {
        console.log(err);
    });
}

listPost('blog-posts')