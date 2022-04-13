// this function pulls in the json quotes file and pushes 5 random quotes to the front page

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
            (startNum >= (Response.length-3)) ? (startNum-=3) : null;
            let endNum = startNum + 3;

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