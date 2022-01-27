AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Tic-Tac-Toe",
    cardImage: "assets/images/project-page/logo.png",
    description: "Classic Tic Tac Toe game with bot.",
    tagimg: "https://www.chrisgodber.co.uk/img/playcanvas.jpg",
    Previewlink: "https://games.acidtriparts.com/games_webbuild/ticTacToe1/",
  },
  {
    title: "Connect4",
    cardImage: "assets/images/project-page/connect4-logo.png",
    description: "An extended version of Tic-Tac-Toe with bot",
    tagimg: "https://www.chrisgodber.co.uk/img/playcanvas.jpg",
    Previewlink: "https://games.acidtriparts.com/games_webbuild/connect4WithBot1/",
  },
  {
    title: "Master Quiz",
    cardImage: "assets/images/project-page/masterquiz.png",
    description: "A quiz game like Kaun Banega Crorepati",
    tagimg: "https://www.chrisgodber.co.uk/img/playcanvas.jpg",
    Previewlink: "https://games.acidtriparts.com/games_webbuild/masterQuiz1/",
  },
  {
    title: "Sniper Shooter 3D",
    cardImage: "assets/images/project-page/snipershooter3dtitle.png",
    description: "First Person Shooter game with zombies",
    tagimg: "https://www.chrisgodber.co.uk/img/playcanvas.jpg",
    Previewlink: "https://games.acidtriparts.com/games_webbuild/sniperShooter3d1/",
    
  },
  {
    title: "Snakes & Ladders",
    cardImage: "assets/images/project-page/sankesnladders.png",
    description: "Typical cardboard game of snakes and ladders with bot",
    tagimg: "https://www.chrisgodber.co.uk/img/playcanvas.jpg",
    Previewlink: "https://games.acidtriparts.com/games_webbuild/snakeAndLadder1/",
    
  },
  {
    title: "Find Hidden Objects",
    cardImage: "assets/images/project-page/hiddenObjects.png",
    description: "Find objects which are hidden in plain sight",
    tagimg: "https://www.chrisgodber.co.uk/img/playcanvas.jpg",
    Previewlink: "https://games.acidtriparts.com/games_webbuild/hiddenObjectLevelBased1/",
    
  },
  {
    title: "Outscal Orientation",
    cardImage: "https://uploads-ssl.webflow.com/6178422b9e7509748411989b/6179401254a9a701196a56e6_logo%20black%20outscal.png",
    description: "Orientation of Outscal by playing 2D Platformer Game",
    tagimg: "https://www.chrisgodber.co.uk/img/playcanvas.jpg",
    Previewlink: "https://panjwaniranjitsingh.itch.io/outscal",
    
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tags, Previewlink, description }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${Previewlink}">${title}<br><span class="my_projects">[Play]</span><br>${description}</a></h1>
                </div>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
