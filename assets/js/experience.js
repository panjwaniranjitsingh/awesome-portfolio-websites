AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Game Developer",
    cardImage: "assets/images/experience-page/NIIT.png",
    place: "NIIT Managed Training Services",
    time: "(March, 2022 - present)",
    desp: "<li>Worked in simulation games.</li><li>Coordinated with artists and colleagues to work as a team.</li><li>Interacted with clients to understand their needs for changes required in a simulation project.</li><li>Created plugins to use in existing Unity projects</li>",
  },
  {
    title: "Game Programmer",
    cardImage: "assets/images/experience-page/acidtriparts-logo-icon.png",
    place: "Acid Trip Arts Studio Pvt. Ltd.",
    time: "(March, 2021 - February, 2022)",
    desp: "<li>Developed 10 hyper-casual games for clients using playcanvas and javascript.</li> <li>Interacted with clients to understand their needs for those particular hypercasual games.</li> <li>Co-ordinated with artist and colleagues to work as a team.</li> <li>Implemented games for mobile platform.</li>",
  },
  {
    title: "Game Programmer Intern",
    cardImage: "assets/images/experience-page/acidtriparts-logo-icon.png",
    place: "Acid Trip Arts Studio Pvt. Ltd.",
    time: "(December,2020 - February, 2021)",
    desp: "<li>Studied Code of Existing Games.</li><li>Created prototype of 5 hypercasual games.</li><li>Successfully did modifications in existing games.</li>",
  },
  {
    title: "IT Infrastructure & Operations",
    cardImage: "assets/images/experience-page/goldwood.jpeg",
    place: "Goldwood Ply Industry Pvt Ltd",
    time: "(2010 - 2020)",
    desp:"<li>Worked on software implementation and maintenance.</li><li>Supervised Operational Management.</li><li>Managed accounting and expenses.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


