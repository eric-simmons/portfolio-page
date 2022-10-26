let reposDiv = document.getElementById("main")

const getUserRepos = () => {
    const apiUrl = 'https://api.github.com/users/' + 'eric-simmons' + '/repos' + '?sort=updated' + '&per_page=5';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                   displayRepos(data)
                    console.log(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to GitHub');
        });
};
//display repos
const displayRepos = data => {
    data.forEach(repo => {
        const repoDiv = document.createElement('a')
        repoDiv.setAttribute("id", "repo-div")
        repoDiv.setAttribute('class', 'box')
        repoDiv.setAttribute("target", "_blank")
        repoDiv.textContent = repo.name
        repoDiv.href = repo.clone_url
        reposDiv.appendChild(repoDiv)

     
    })
    
}

getUserRepos()