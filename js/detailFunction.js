function detailFunction(prop) {
    document.getElementById(prop).className = "detail-box";

    fetch("../content/resume.json")
    .then(Response => Response.json()) 
    .then(Response => {
        Response.map((values) => {
            data = `
                <p>
                    <br><strong>“${values.company}”</strong>
                    <br><strong>"${values.title}"</strong>
                    <br>${values.content}
                </p>
            `
            document.getElementById(prop).innerHTML += data;
        })
    });
}