$(document).ready(function () {
  // import view port library function
  // jQuery.extend(verge);

  // smooth scrolling of viewport to target
  $('a[href^="#"]').click(function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(this.hash).offset().top - 50,
      },
      900
    );
  });

  $("#down").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#about").offset().top - 50,
      },
      900
    );
  });

  var currentTime = new Date();
  var year = currentTime.getFullYear();

  // data for the portfolio cards front and back
  var projectData = [
    {
      title: "BBQ Quotes",
      text: '<p>A BBQ project, <a href="https://codepen.io/denisfirefly/pen/VwyZWbp" target="_blank"><i>See the Code of the Quote Machine</i></a>. The user is able to show a new random quote. <strong>Quotes</strong> was designed and optimized to be a mobile web app first.</p> <strong>Code:</strong> HTML5, CSS3, Javascript<br> <strong>Layout:</strong> Bootstrap<br> <strong>Graphics Editor:</strong> Photoshop, pixlr.com<br> <strong>Images:</strong> Google<br> <strong>Fonts:</strong> Font-awesome<br> <strong>Data:</strong> random famous quotes API',

      image: ["img/card_pngs/bbq_quotes_card.PNG"],
      site: [
        [
          "CodePen",
          "fa-codepen",
          "https://codepen.io/denisfirefly/pen/VwyZWbp",
        ],
        //["Live Site", "fa-link", "http://2am.ninja/quotes/"],
      ],
    },
    {
      title: "BBQ Quiz",
      text: '<p>A BBQ project, <a href="https://codepen.io/denisfirefly/pen/JjOJbmX" target="_blank"><i>Use the Codepen Website to preview the Code</i></a>. It is made for people who want to check their IT knowledge gained from BBQ.</p> <strong>Code:</strong> HTML5, CSS3, Javascript<br> <strong>Layout:</strong> Bootstrap<br> <strong>Fonts:</strong> Font-awesome<br> <strong>Data:</strong> Books and IHK Tests',

      image: ["img/card_pngs/bbq_quiz_card.PNG"],
      site: [
        [
          "CodePen",
          "fa-codepen",
          "https://codepen.io/denisfirefly/pen/JjOJbmX",
        ],
        //      ,['Live Site', 'fa-link', 'http://2am.ninja/twitch/']
      ],
    },
    {
      title: "Modul 1",
      text: '<p>A BBQ project, <a href="https://codepen.io/denisfirefly/pen/WNXyaOK" target="_blank"><i>Build a Modul Website</i></a>. This is the Modul 1 Website. there is something hidden inside.</p> <strong>Code:</strong> HTML5, CSS3, Javascript<br> <strong>Layout:</strong> Bootstrap<br> <strong>Graphics Editor:</strong>Photoshop, pixlr.com<br> <strong>Images:</strong> Google<br> <strong>Data:</strong> BBQ Lectures',

      image: ["img/card_pngs/modul1_card.PNG"],
      site: [
        [
          "CodePen",
          "fa-codepen",
          "https://codepen.io/denisfirefly/pen/WNXyaOK",
        ],
      ],
    },
    {
      title: "Pomodoro Timer",
      text: '<p>A BBQ project, <a href="https://codepen.io/denisfirefly/pen/OJQRGGz" target="_blank"><i>Time your success</i></a>. A user can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed. There is also a possibility to change the amount of desired break. <strong>Pomodoro Timer</strong> was designed and optimized to be a mobile web app first.</p> <strong>Code:</strong> HTML5, CSS3, Javascript<br> <strong>Layout:</strong> Bootstrap<br> <strong>Fonts:</strong> Font-awesome',

      image: ["img/card_pngs/pomodoro_card.png"],
      site: [
        [
          "CodePen",
          "fa-codepen",
          "https://codepen.io/denisfirefly/pen/OJQRGGz",
        ],
            // ["Live Site", "fa-link", "http://2am.ninja/timer/"],
      ],
    },
    {
      title: "Magic Keyboard",
      text: '<p>A BBQ project, <a href="https://codepen.io/denisfirefly/full/abEvgLK" target="_blank"><i>Type FAST as Hell</i></a>. A user friendly interface to teach the user to type... <strong>Magic Keyboard</strong> was designed and optimized to be a motivated usage first.</p> <strong>Code:</strong> HTML5, CSS3, Javascript<br> <strong>Layout:</strong> Bootstrap<br> <strong>Images:</strong> Google<br> <strong>Fonts:</strong> Font-awesome<br> <strong>Data:</strong> My Brain',

      image: ["img/card_pngs/keyboard_card.png"],
      site: [
        [
          "CodePen",
          "fa-codepen",
          "https://codepen.io/denisfirefly/full/abEvgLK",
        ],
      ],
    },
    /*                    
                        {
         title: 'Camper News',
         text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-stylize-stories-on-camper-news" target="_blank"><i>Stylize Stories on Camper News</i></a>. The user can browse recent posts from Camper News.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap, Masonary<br> <strong>Graphics Editor:</strong> Gimp, pixlr.com<br> <strong>Images:</strong> unsplash.com<br>  <strong>Data:</strong> Free Code Camp news API',

         image: ['http://2am.ninja/img/news.jpg'],
         site: [
           ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/debug/vOvBqY']
         ]
       }, 
     */
    {
      title: "Matrix",
      text: '<p>A BBQ project, <a href="ttps://codepen.io/denisfirefly/full/WNMGBxY" target="_blank"><i>Visualize the Matrix </i></a>. Design motivated from the movie "The Matrix". All the knowledge you need to know is here!</p> <strong>Code:</strong> HTML5, CSS3, Javascript<br> <strong>Layout:</strong> Bootstrap',

      image: ["img/card_pngs/matrix-secret_card.png"],
      site: [
        [
          "CodePen",
          "fa-codepen",
          "https://codepen.io/denisfirefly/full/WNMGBxY",
        ],
      ],
    },
    {
      title: "WiSo",
      text: '<p>A BBQ project, <a href="https://codepen.io/denisfirefly/full/MWQjdmg" target="_blank"><i>Wie so???</i></a>. This is the Modul 2 Website.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap',

      image: ["img/card_pngs/wiso_card.png"],
      site: [
        [
          "CodePen",
          "fa-codepen",
          "https://codepen.io/denisfirefly/full/MWQjdmg",
        ],
      ],
    },
    {
      title: "This Website",
      text: '<p>A BBQ project, <a href="https://codepen.io/denisfirefly/full/MWQjdmg" target="_blank"><i>Portfolio</i></a>. This is an Inception, if you click on the link, you will land on the SAME website where you are located right now!</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap',

      image: ["img/card_pngs/portfolio_card.png"],
      site: [
        [
          "CodePen",
          "fa-codepen",
          "https://codepen.io/denisfirefly/full/zYRwEpe",
        ],
      ],
    },
    /*                 
                     {
      title: 'Force Graph',
      text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/show-relationships-with-a-force-directed-graph" target="_blank"><i>Show Relationships with a Force Directed Graph</i></a>. The user can see a Force-directed Graph that shows which campers are posting links on Camper News to which domains.</p> <strong>Code:</strong> HTML5, CSS3, D3, SVG, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br>  <strong>Data:</strong> Free Code Camp news API',

      image: ['http://2am.ninja/img/force-graph.jpg'],
      site: [
        ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/debug/KVdbMO']
      ]
    }, 
    
    // */
    // {
    //   title: "Tic-Tac-Toe",
    //   text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game" target="_blank"><i>Build a Tic Tac Toe Game</i></a>. The user can play a game of Tic Tac Toe with the computer.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Materialize.css',

    //   image: ["http://2am.ninja/img/ttt.jpg"],
    //   site: [
    //     [
    //       "CodePen",
    //       "fa-codepen",
    //       "https://s.codepen.io/MutantSpore/full/jWWYLo",
    //     ],
    //   ],
    // },
  ];

  // add listener to all the cards for click flipping
  function addListener() {
    var cards = document.querySelectorAll(".card.effect_click");

    for (var i = 0; i < cards.length; i++) {
      clickListener(cards[i]);
    }

    function clickListener(card) {
      card.addEventListener("click", function () {
        this.classList.toggle("flipped");
      });
    }
  }

  // create, populate and show portfolio project cards
  function showProjectCards() {
    let html = "";

    projectData.forEach(function (project) {
      html += '<div class="col-sm-6 col-md-4">';
      html += '<div class="card effect_click"><div class="card_front">';
      html +=
        '<figure><img class="img-responsive" src="' + project.image[0] + '">';
      html += '<figcaption class="project-title">';
      html += project.title;
      html += "</figcaption></figure></div>";

      html += '<div class="card_back"><figure>';
      html += '<div class="project-title">' + project.title + "</div>";
      html += '<figcaption">';
      html += '<div class="project-body">' + project.text + "</div>";
      html +=
        '<div><a data-toggle="tooltip" title="' +
        project.site[0][0] +
        '" data-placement="top" href="' +
        project.site[0][2] +
        '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0"><i class="fa ' +
        project.site[0][1] +
        '" aria-hidden="true"></i></a>';

      if (typeof project.site[1] !== "undefined") {
        html +=
          '<a data-toggle="tooltip" title="' +
          project.site[1][0] +
          '" data-placement="top" href="' +
          project.site[1][2] +
          '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1"><i class="fa ' +
          project.site[1][1] +
          '" aria-hidden="false"></i></a>';
      }

      html += "</div></figcaption></figure></div>";
      html += "</div>";
      html += "</div>";
    });

    $("#theProjects").append(html);
    addListener();
  }

  showProjectCards();
  $(".copyright").append(
    "<span>© " + year + " Denis Ahmed. All rights reserved</span>"
  );

  // turn on bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();
});
