// pure javascript
let object;
let httpRequest = new XMLHttpRequest(); // asynchronous request
httpRequest.open("GET", "../content/quotes.json", true);
httpRequest.send();
httpRequest.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      	// when the request has completed
        object = JSON.parse(this.response);
    }
});