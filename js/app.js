// eventlistener and function calls

const userSearch = document.getElementById('userSearch');
let typingTimer;

userSearch.addEventListener('keyup', githubUserSearch);
userSearch.addEventListener('keydown', clearTimeout(typingTimer));
