document.getElementById('get-info-btn').addEventListener('click', makeEvent);
let httpRequest;

function makeEvent() {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert("Couldn't create a request");
        return false;
    }
    httpRequest.onreadystatechange = displayInfo;
    httpRequest.open('GET', 'http://127.0.0.1:8000/tweet/');
    httpRequest.send();
}

function displayInfo() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            console.log(httpRequest.responseText);
        } else {
            alert('Error!!!');
        }
    }
}