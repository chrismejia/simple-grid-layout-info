import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function AnswerPageBase({ pageName, children }) {
  return (
    <section className="container">
      <Helmet>
        <title>Challenge | {pageName}</title>
      </Helmet>
      <h1 className="title centered-text neon-effect">Challenge: {pageName}</h1>
      <nav className="grid site-nav">
        <div>
          <NavLink
            to={"/"}
            // style={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/3x3-grid"}
            // style={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            3x3 Grid
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/square-knot"}
            // style={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Celtic Knot
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/square-knot"}
            // style={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Celtic Knot
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/square-knot"}
            // style={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Celtic Knot
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/square-knot"}
            // style={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Celtic Knot
          </NavLink>
        </div>
      </nav>
      {children}
    </section>
  );
}
