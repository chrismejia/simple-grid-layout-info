export default function GridExamples() {
  return (
    <>
      <h2>What Can You Build With The Grid?</h2>
      <p>Stuff like this article.</p>

      <div class="classic-article-grid">
        <header>
          <h3>Lorem Ipsum Dolor</h3>
        </header>
        <aside class="sidebar-left">
          <p>
            <b>Recent Articles</b>
          </p>
          <p>
            <a href="#">Volutpat ac</a>
          </p>
          <p>
            <a href="#">Migurd eneos</a>
          </p>
          <p>
            <a href="#">Ciborgifis</a>
          </p>
          <p>
            <a href="#">Ix Peron Al</a>
          </p>
        </aside>
        <article>
          <p>
            Dolor purus non enim praesent elementum facilisis leo vel. Iaculis
            nunc sed augue lacus. Quam id leo in vitae turpis massa sed
            elementum. Sed vulputate odio ut enim blandit volutpat maecenas
            volutpat blandit. Vitae turpis massa sed elementum.
          </p>
          <p>
            Fermentum leo vel orci porta non pulvinar. Morbi leo urna molestie
            at elementum eu facilisis sed odio. Rhoncus aenean vel elit
            scelerisque mauris pellentesque pulvinar pellentesque habitant.
            Nulla at volutpat diam ut venenatis tellus in. Vestibulum mattis
            ullamcorper velit sed ullamcorper morbi. Feugiat nibh sed pulvinar
            proin gravida.
          </p>
        </article>
        <aside class="sidebar-right">
          <p>
            <i>by Pierogi</i>
          </p>
          <p>August 27th, 2022</p>
        </aside>
        <footer>
          <i>&copy; Dignissim Lectus LLC 2020</i>
        </footer>
      </div>

      <p>Or like this photo collage.</p>

      <div className="picture-grid">
        <div className="top-horiz">
          <img
            src="../examples/pexels-1.jpg"
            alt="Body of Water during Golden Hour"
          />
        </div>
        <div className="tall">
          <img src="../examples/pexels-2.jpg" alt="City Buildings" />
        </div>
        <div className="side-1">
          <img src="../examples/pexels-3.jpg" alt="Hot Air Balloons" />
        </div>
        <div className="titling">
          <h3 className="centered-text">Recent Photos</h3>
        </div>
        <div className="side-2">
          <img
            src="../examples/pexels-4.jpg"
            alt="Body of Water during Golden Hour"
          />
        </div>
      </div>
    </>
  );
}
