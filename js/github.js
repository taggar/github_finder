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
headers.set('Authorization', `bearer ${personalToken}`);
headers.set('User-Agent', 'taggar');
//headers.set('credentials', 'include');
let query = `query user($user:String!) { user(login: $user) { login createdAt url avatarUrl websiteUrl bio company location email followers { totalCount } following { totalCount } isHireable repositories (first: 10, privacy: PUBLIC) { totalCount nodes { name homepageUrl watchers { totalCount } forks {totalCount} stargazers {totalCount} }}}}`;

const githubUserSearch = async event => {
  let variables = {
    user: event.target.value
  };

  let response = await fetch(baseUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ query, variables })
  });

  let result = await response.json();

  showUserInfo(result.data);
  showUserRepo(result.data);
};

const queryToGraphiQLQueryString = query => {
  let lines = query.trim().split('\n');
  let queryLines = lines.slice(1, -1).map(line => line.trim());

  return encodeURIComponent(`{${queryLines.join(' ')}}`);
};
