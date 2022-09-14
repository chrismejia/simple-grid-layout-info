export const threeColJSX = `<div className="grid example classic-article">
  <header className="article-title">
    <h3>Lorem Ipsum Dolor</h3>
  </header>

  <aside className="sidebar-left">
    <p className="article-text">
      <b>Recent Articles</b>
    </p>
    <p className="article-text">
      <a href="#">Volutpat ac</a>
    </p>
    <p className="article-text">
      <a href="#">Migurd eneos</a>
    </p>
    <p className="article-text">
      <a href="#">Ciborgifis</a>
    </p>
    <p className="article-text">
      <a href="#">Ix Peron Al</a>
    </p>
  </aside>

  <article className="article">
    <p className="article-text">
      <i>by Ixion</i>
    </p>
    <p className="article-text">
      Lorem ipsum...
    </p>
    <p className="article-text">
      Lorem ipsum...
    </p>
    <p className="article-text">
      Lorem ipsum...
    </p>
  </article>

  <aside className="ad">
    <img
      src="../../examples/pexels-article-ad.jpg"
      alt="Tonic ad"
    />
    <i>Buy Tonic&#8482;!</i>
  </aside>

  <footer>
    <i>&copy; Dignissim Lectus LLC MCCCVII</i>
  </footer>
</div>`;

export const threeColCSS = `.classic-article {
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;

  color: black;
  background-color: floralwhite;
  margin-top: 2rem;
  border-radius: 0.75rem;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.classic-article > * {
  padding: 1rem;
}
.article-title {
  grid-column: 1 / 4;
  border-bottom: 2px solid black;
}

.article-title h3 {
  font-family: "Playfair Display", serif;
  font-style: italic;
  margin-top: 0;
}

.article-text {
  line-height: 1.5;
  padding-bottom: 0;
}

.sidebar-left {
  grid-column: 1 / 2;
}

.sidebar-left a {
  font-style: italic;
  color: darkslategray;
}

.article {
  grid-column: 2 / 3;
}

.ad {
  grid-column: 3 / 4;

  position: sticky;
  position: -webkit-sticky;
  margin: 1.5rem 0 3rem;
  top: 2rem;
  padding: 0.75rem;
  text-align: right;
}

.ad img {
  width: 100%;
  height: 60%;
  object-fit: cover;

  border-radius: 0.75rem;
}

.article-footer {
  grid-column: span 12;
  border-top: 2px solid black;
}

/* Reflow article into skinny layout */
@media (max-width: 1024px) {
  .classic-article {
    grid-template: auto 1fr auto / minmax(30ch, 55ch) 1fr;
  }

  .article {
    grid-column: 1 / 2;
  }

  .ad {
    grid-column: 2 / 3;
  }

  .sidebar-left {
    grid-column: 1 / 3;
    grid-row: 3;
    display: inline-block;
  }
}`;
