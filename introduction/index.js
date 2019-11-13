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
            let idTweetData = document.getElementById('detail-tweet');
            for (let i = 0; i < tweetData.length; i++) {
                let obj = tweetData[i];

                idTweetData.insertAdjacentHTML('beforeend',
                '<article class="media content-section">\
                <img class="rounded-circle article-img" src="default.png">\
                <div class="media-body"><div class="article-metadata">\
                <a class="mr-2" href="">'+ obj.name +'</a>\
                <small class="text-muted">'+obj.date_time+'</small>\
                </div><p class="article-content">'+obj.content+'</p>\
                </div></article>'
                );
            }
        } else {
            alert('Error!!!');
        }
    }
}


