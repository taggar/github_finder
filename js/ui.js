// visualization

function showUserInfo(user) {
    let target = document.getElementById('userInfo');
    target.innerHTML = `
    <div class="  card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
      </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Repo public: ${user.repos}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company:${user.company}</li>
                            <li class="list-group-item">Website/Blog: <a href="${user.blog}">${user.blog} </a></li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                </div>
      </div>
    </div>`
}