//get elements

let timeDiv = document.getElementById("time")
let textDiv = document.getElementById("text-box")
let aboutDiv = document.getElementById("about")
let currentProjects = document.getElementById("current-projects")
let lightswitch = document.getElementById("lightswitch")


//time
const DateTime = luxon.DateTime;
const now = DateTime.now().toFormat("t");
const date = DateTime.now().toFormat("MMMM dd")
const currentHour = now.hour



function colorMode(){
    console.log('clicked')
   document.body.classList.toggle("lightmode")
}

document.createElement('h1').textContent = 'hey'
//aboutDiv.textContent = 'test'
//textDiv.appendChild(aboutContent)

// setInterval(displayImg, 1000 )
// function displayImg(){
//     const newImg = document.createElement('img')
//     newImg.src = '../images/jellyfish1.jpg'
//     textDiv.appendChild(newImg)
// }

const printTime = () => {timeDiv.textContent = date + " " + now}

printTime()

lightswitch.addEventListener('click', colorMode)