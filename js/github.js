// api calls

/*
https://developer.github.com/v4/guides/forming-calls/
*/

const client_id = '538f75d2504eb830e987';
const client_secret = 'e63150a06acdb1db5ef9c6a960ea9332b3db3eb6';
const baseUrl = 'https://api.github.com/graphql';
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
    headers: new Headers({
      'Content-type': 'application/json',
      Authorization: `Bearer ${client_secret}`
    }),
    body: JSON.stringify(query)
  }).then(result => {
    console.log(result);
    showUserInfo(result);
    //showUserRepo(result);
  });
};
