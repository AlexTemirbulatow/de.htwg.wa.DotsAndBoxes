export const index = {
  emits: ['display-game', 'scroll-to'],
  methods: {
    displayGame() {
      this.$emit('display-game')
    },
    scrollHandler(toId) {
      this.$emit('scroll-to', toId)
    },
  },
  template:
  `
    <section class="header bg-dark text-light text-center text-sm-start">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand fs-4 my-2" type="button">
            <img src="assets/images/0_Logo.png" width="13%" alt="Logo">
            <span class="logo p-3">Dots And Boxes</span>
          </a>
          <button 
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="sidebar offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header text-white border-bottom">
            <h5 class="offcanvas-title"
            id="offcanvasNavbarLabel">Menu</h5>
            <button
                type="button"
                class="btn-close btn-close-white shodow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close">
            </button>
            </div>
            <!-- Sidebar Body -->
            <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                <li class="nav-item mx-2">
                  <a class="nav-link active" aria-current="page" type="button">Home</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" @click="displayGame" type="button">Game</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" @click="scrollHandler('rules')" type="button">Rules</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" @click="scrollHandler('github')" type="button">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div class="container">
        <div class="d-flex py-4 text-center justify-content-center">
          <div>
            <h1 class="dab"><span class="mini lead my-1">Minigame</span><br>Dots And Boxes</h1>
            <div class="text" style="max-width: 570px;">
              <p class="lead my-4 mx-2">
                Dots and Boxes has classically been played on paper
                using pencils. It was first described by a French 
                mathematician, Édouard Lucas, in the 19th century.
                Mr. Lucas called it La Pipopipette.
              </p>
            </div>
            <a id="playbtn" @click="displayGame" type="button" style="font-family: Lilita One, sans-serif;">
              Play Now
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="rules" class="pt-4">
      <div class="container">
        <div class="d-flex justify-content-center">
          <h1 class="mt-5 mb-5 text-center">How To Play</h1>
        </div>
        <div class="row justify-content-md-center text-md-start text-center">
          <div class="col-md-6 mb-3 d-flex align-items-center justify-content-center">
            <img class="img-fluid w-75"
            src="assets/images/rulesEg.png"
            alt="GUI Bild">
          </div>
          <div class="col-md-6 d-flex justify-content-center flex-column">
            <h2 class="navbar-nav">Rules</h2>
            <p class="lead text-white">
              You move by taking a horizontal or vertical line
              between two dots. When you place the last line that
              forms a box, the box and its content are yours. The
              players move in turn, but whenever a player takes a
              box, they must move again. One box is one point.

              The game ends when all boxes have been taken.

              The player with the highest score wins.
              It's a tie if two players got the same highest score.

              2-4 player mode.
            </p>
            <h2 class="navbar-nav">Strategy</h2>
            <p class="lead text-white">
              Most novice players always claim a box if they can, 
              but expert players take time to consider double crossing 
              their opponent. A double cross is when you give a short 
              chain of boxes to your opponent and then leave them with 
              no choice but to create a long chain for you on the next 
              turn. It is the key to winning!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="github" class="pt-5 pb-5">
      <div class="container mb-5">
        <div class="d-flex justify-content-center">
          <h1 class="mt-5 mb-5 text-center">Open Source</h1>
        </div>
        <div class="row justify-content-md-center text-md-start text-center">
          <div class="col-md-6 mb-3 d-flex align-items-center justify-content-center">
            <img class="img-fluid w-50"
              src="assets/images/githubLogo.png" 
              alt="GUI Bild">
          </div>
          <div class="col-md-6 d-flex justify-content-center flex-column">
            <h2 class="mini mb-2">Get Your Own Version On GitHub</h2>
            <p class="lead text-white">
              Get a free version of this game, written in scala 3. Feel 
              free to contribute to an open-source project done for the 
              class 'software engineering' at htwg constance using functional 
              programming. Read the usage before trying the GUI and TUI. Have fun!
            </p>
            <a class="btn btn-light mt-3 w-50 d-block mx-auto mx-md-0"
              target="_blank"
              href="https://github.com/AlexTemirbulatow/de.htwg.se.DotsAndBoxes">
              <i class="bi bi-chevron-right"></i> Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  `
}
  