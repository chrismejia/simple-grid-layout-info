import { useState } from "react";

export default function ShowExampleCode({ exampleLabel, children }) {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((state) => !state);
  };

  return (
    <article className="grid example show-ex-code">
      <button className="btn-ex-code" onClick={toggleOpen}>
        {isOpen ? `Hide ${exampleLabel} Code` : `Show ${exampleLabel} Code`}
      </button>
      {isOpen && children}
    </article>
  );
}
