function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function loadQuotes(postContainerElementID) {
    let dataList = new Array();
    fetch("../content/quotes.json")
        .then(Response => Response.json()) 
        .then(Response => {
            
            let data = "";
            let startNum = getRandomInt(Response.length);
            (startNum >= (Response.length-5)) ? (startNum-=5) : null;
            let endNum = startNum + 5;

            Response.slice(startNum, endNum).map((values) => {
                data = `
                    <p class="reveal">
                        <br><strong>“${values.content}”</strong>
                        <br><em>${values.author}</em>
                    </p>
                `
                document.getElementById(postContainerElementID).innerHTML += data;
            })
        });
}
loadQuotes('quotes');