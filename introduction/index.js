// document.getElementById('get-info-btn').addEventListener('click', makeEvent);
window.addEventListener('load', makeEvent);
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
            let tweetData = JSON.parse(httpRequest.responseText)
            let idTweetData = document.getElementById('body-content');
            for (let i = 0; i < tweetData.length; i++) {
                idTweetData.insertAdjacentHTML('beforeend', '<h1>' + tweetData[i]['content'] + '</h1>')
            }
        } else {
            alert('Error!!!');
        }
    }
}