import { useState } from "react";
import MenuHamburger from "./MenuHamburger";
import SlidingMenuLinks from "./SlidingMenuLinks";

export default function SlidingMenu() {
  const [isVisible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible((state) => !state);

  return (
    <>
      <h4
        className={
          isVisible
            ? "neon-effect menu-titling show"
            : "neon-effect menu-titling hide"
        }
      >
        Building Layouts
        <br />
        Using CSS Grid
      </h4>
      <MenuHamburger toggleFunc={toggleVisibility} visible={isVisible} />
      <nav id="menu" className={isVisible ? "show" : "hide"}>
        <SlidingMenuLinks />
      </nav>
    </>
  );
}
