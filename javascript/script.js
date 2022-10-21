//get elements
let reposDiv = document.getElementById("repos")
let timeDiv = document.getElementById("time")
let linksDiv = document.getElementById("links")


//time
const DateTime = luxon.DateTime;
const now = DateTime.now().toFormat("t");
const date = DateTime.now().toFormat("MMMM dd")
const currentHour = now.hour





const getUserRepos = () => {
    const apiUrl = 'https://api.github.com/users/' + 'eric-simmons' + '/repos';

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

const displayRepos = data => {
    data.forEach(repo => {
        const repoDiv = document.createElement("div")
        repoDiv.setAttribute("id", "repo-div")
        repoDiv.textContent = repo.description
        let repoUrl = repo.url
        console.log(repoUrl)
        reposDiv.appendChild(repoDiv)
    })
    
}

const printTime = () => {timeDiv.textContent = date + " " + now}

printTime()
getUserRepos()