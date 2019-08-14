// api calls

/*
https://developer.github.com/v4/guides/forming-calls/
*/

const client_id = '538f75d2504eb830e987';
const client_secret = 'e63150a06acdb1db5ef9c6a960ea9332b3db3eb6';
const personalToken = 'e4ff3e4cb181afb74edb6f8900afc5486983076c';
const baseUrl = `https://api.github.com/graphql`;
const headers = new Headers();
headers.set('Content-type', 'application/json');
headers.set('Authorization', `Bearer ${client_secret}`);
headers.set('User-Agent', client_id);
//headers.set('credentials', 'include');
const query = `
query {
  user(login: "taggar") {
    login
    url
    avatarUrl
    bio
    company
    email
    followers {
      totalCount
    }
    following {
      totalCount
    }
    isHireable
    repositories (first: 10, privacy: PUBLIC) {
      totalCount
      nodes {
        name
        homepageUrl
        watchers {
          totalCount
        }
      }
    }
  }
}`;

const githubUserSearch = async event => {
  fetch(baseUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(query)
  }).then(result => {
    console.log(result);
    //showUserInfo(result);
    //showUserRepo(result);
  });
};
