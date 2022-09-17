export default function MenuHamburger({ toggleFunc, visible }) {
  return (
    <div
      className={
        visible
          ? "hamburger hamburger--arrow is-active"
          : "hamburger hamburger--arrow"
      }
      id="menu-btn"
      onClick={toggleFunc}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner" />
      </div>
    </div>
  );
}
