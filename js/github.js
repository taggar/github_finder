// api calls

const baseUrl = 'https://api.github.com/users/';

const githubUserSearch (value => {
    doXhrGetJson(baseUrl ... )


});

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