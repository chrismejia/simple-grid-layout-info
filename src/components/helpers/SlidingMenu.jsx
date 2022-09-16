import { useState } from "react";

import NavSectionLinks from "./NavSectionLinks";

export default function SlidingMenu() {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible((state) => !state);

  return (
    <nav id="menu">
      <button onClick={toggleVisibility}>Menu</button>

      <div className={isVisible ? "show" : "hide"}>
        <h3>Building Layouts Using CSS Grid</h3>
        <NavSectionLinks />
      </div>
    </nav>
  );
}
