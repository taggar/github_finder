// visualization

function showUserInfo(data) {
  let user = data.user;
  let target = document.getElementById('userInfo');
  target.innerHTML = `
    <div class="  card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatarUrl}">
                <a href="${
                  user.url
                }" target="_blank" class="btn btn-primary btn-block">View&nbsp;Profile</a>
        </div>
        <div class="col-md-9">
            <span class="badge badge-primary">Repo public: ${
              user.repositories.totalCount
            }</span>
            <span class="badge badge-success">Followers: ${
              user.followers.totalCount
            }</span>
            <span class="badge badge-info">Following: ${
              user.following.totalCount
            }</span>
            <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: <a href="${
                      user.websiteUrl
                    }">${user.websiteUrl} </a></li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${
                      user.createdAt
                    }</li>
                </ul>
        </div>
      </div>
    </div>`;
}

function showUserRepo(data) {
  let repos = data.user.repositories.nodes;
  let target = document.getElementById('userRepo');
  console.log(repos);
  target.innerHTML = '';
  for (let repo of repos) {
    target.innerHTML += ` <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.homepageUrl}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary">Stars:${
              repo.stargazers.totalCount
            }</span>
            <span class="badge badge-secondary">Watchers: ${
              repo.watchers.totalCount
            }</span>
            <span class="badge badge-success">Forks: ${
              repo.forks.totalCount
            }</span>
          </div>
        </div>
      </div>`;
  }
}
