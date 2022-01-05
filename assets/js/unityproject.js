AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Tic-Tac-Toe",
    cardImage: "assets/images/project-page/tictactoe.PNG",
    description: "Classic Tic Tac Toe game with bot.",
    tagimg: "https://www.chrisgodber.co.uk/img/playcanvas.jpg",
    Previewlink: "https://www.loom.com/share/eaf33f8be71143f2a6830cb43d3e4f98",
    Githublink: "https://github.com/panjwaniranjitsingh/Tic-Tac-Toe",
  },
  {
    title: "Snake 2D",
    cardImage: "assets/images/project-page/snakeGame.jpg",
    description: "Classic Snake Game played in Nokia phones.",
    tagimg: "https://www.chrisgodber.co.uk/img/playcanvas.jpg",
    Previewlink: "#",
    Githublink: "https://github.com/panjwaniranjitsingh/Snake2d",
  },
  {
    title: "2D Platformer Game",
    cardImage: "assets/images/project-page/2dplatformer.PNG",
    description: "2D-Platformer-Game like mario",
    tagimg: "https://www.chrisgodber.co.uk/img/playcanvas.jpg",
    Previewlink: "https://www.linkedin.com/posts/panjwaniranjitsingh_projectsatoutscal-unity2d-platformer-activity-6792798990371999744-Y5Zf",
    Githublink: "https://github.com/panjwaniranjitsingh/2D-Platformer-Game",
  },
  {
    title: "Tank Wars",
    cardImage: "assets/images/project-page/TankWars.PNG",
    description: "3D Tank Battle Game",
    tagimg: "https://www.chrisgodber.co.uk/img/playcanvas.jpg",
    Previewlink: "#",
    Githublink: "https://github.com/panjwaniranjitsingh/3D-battle-tank-game",
    
  },
  {
    title: "Chest Reward System",
    cardImage: "assets/images/project-page/ChestReward.PNG",
    description: "Chest Reward System using MVC Design Pattern.",
    tagimg: "https://www.chrisgodber.co.uk/img/playcanvas.jpg",
    Githublink: "https://github.com/panjwaniranjitsingh/MVC-RewardSystem",
    
  },
  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tags, Previewlink, description,Githublink }) => {
      (output += `       
        
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h6 class="title"><a href="${Githublink}">${title}<br></a>
                <a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="90" height="75" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></h1>
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
