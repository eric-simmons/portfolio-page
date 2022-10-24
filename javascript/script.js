//get elements
let reposDiv = document.getElementById("repos")
let timeDiv = document.getElementById("time")
let linksDiv = document.getElementById("links")
let textDiv = document.getElementById("text-box")


//time
const DateTime = luxon.DateTime;
const now = DateTime.now().toFormat("t");
const date = DateTime.now().toFormat("MMMM dd")
const currentHour = now.hour




//get repos
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
        repoDiv.setAttribute("target", "_blank")
        repoDiv.textContent = repo.name
        repoDiv.href = repo.clone_url
        reposDiv.appendChild(repoDiv)
    })
    
}

// setInterval(displayImg, 1000 )
// function displayImg(){
//     const newImg = document.createElement('img')
//     newImg.src = '../images/jellyfish1.jpg'
//     textDiv.appendChild(newImg)
// }

const printTime = () => {timeDiv.textContent = date + " " + now}

printTime()
getUserRepos()