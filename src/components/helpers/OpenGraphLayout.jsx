export default function OpenGraphLayout() {
  return (
    <section className="container">
      <div className="grid og-image">
        <div className="title-space">
          <h1 className="neon-effect centered-text">
            Build Layouts Using
            <br /> CSS Grid
          </h1>
          <p
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              marginTop: "4rem",
            }}
          >
            {"(like this link image)"}
          </p>
        </div>

        <div className="grid og-wrapper">
          <div className="header">Header</div>
          <div className="nav">Nav</div>
          <div className="content">Content</div>
          <div className="og-ad">Ad</div>
          <div className="footer">Footer</div>
        </div>
      </div>
    </section>
  );
}

// <div className="og-title">
//   <h2 className="neon-effect">Build Layouts</h2>
// </div>
