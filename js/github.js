// api calls

const baseUrl = 'https://api.github.com/users/';
const client_id = '538f75d2504eb830e987';
const client_secret = 'e63150a06acdb1db5ef9c6a960ea9332b3db3eb6';

function githubUserSearch() {

    doXhrGetJson(`${baseUrl}${event.target.value}?client_id=${client_id}&client_secret=${client_secret}`)
        .then(function (result) { showUserInfo(result) });
}

/* Generic function to get an ajax json response
===============================================*/
function doXhrGetJson(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(this.response);
        };
        xhr.onerror = reject;
        xhr.responseType = 'json';
        xhr.open('GET', url);
        xhr.send();
    });
}