async function loadQuotes(postContainerElementID) {
    fetch("../content/quotes.json")
        .then(Response => Response.json())
        .then(Response => {
            let data = "";
            Response.map((values) => {
                data = `
                    <p class="reveal">
                        <br><strong>“${values.content}”</strong>
                        <br><em>${values.author}</em>
                    </p>
                `
            })
            document.getElementById(postContainerElementID).innerHTML = data;
        });
}

loadQuotes('quotes');