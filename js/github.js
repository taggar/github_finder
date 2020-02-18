// api calls

/*
https://developer.github.com/v4/guides/forming-calls/
*/

/*
 Make sure you have a config.js file as follows:
 
 var config = {
   personalToken: 'your personal token here'
};

*/

const personalToken = config.personalToken;
const baseUrl = `https://api.github.com/graphql`;
const headers = new Headers();
headers.set('Content-type', 'application/json');
headers.set('Authorization', `bearer ${personalToken}`);

let query = `query user($user:String!) { 
  user(login: $user) { 
    avatarUrl
    bio
    company
    createdAt
    email
    isHireable
    location
    login
    url
    websiteUrl
    followers { 
      totalCount 
    }
    following { 
      totalCount 
    }
    repositories (first: 10, privacy: PUBLIC) {
      totalCount
      nodes {
        name
        homepageUrl
        watchers {
          totalCount
        }
        forks {
          totalCount
        }
        stargazers {
          totalCount
        }
      }
    }
  }
}`;

const githubUserSearch = event => {
   clearTimeout(typingTimer);
   typingTimer = setTimeout(async () => {
      let variables = {
         user: event.target.value
      };
      let response = await fetch(baseUrl, {
         method: 'POST',
         headers: headers,
         body: JSON.stringify({ query, variables })
      });

      console.log(response);
      let result = await response.json();
      console.log(result);
      if (result.hasOwnProperty('errors')) {
         showError(result.errors, event.target.value);
      } else {
         showUserInfo(result.data);
         showUserRepo(result.data);
      }
   }, 200);
};

