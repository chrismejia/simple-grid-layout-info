import { useState } from "react";

export default function Target() {
  return <TargetWithDetails />;
}

const TargetPlain = () => (
  <article className="container">
    <div className="grid challenge target">
      <div className="target-left filled">
        <p>.target-left</p>
      </div>
      <div className="target-top filled">
        <p>.target-top</p>
      </div>
      <div className="target-right filled">
        <p>.target-right</p>
      </div>
      <div className="target-center filled">
        <p>.target-center</p>
      </div>
      <div className="target-bottom filled">
        <p>.target-bottom</p>
      </div>
    </div>
  </article>
);

const TargetWithDetails = () => (
  <article className="container">
    <div className="grid challenge target">
      <div className="target-left detailed">
        <p>.target-left</p>
      </div>
      <div className="target-top detailed">
        <p>.target-top</p>
      </div>
      <div className="target-right detailed">
        <p>.target-right</p>
      </div>
      <div className="target-center detailed">
        <p>.target-center</p>
      </div>
      <div className="target-bottom detailed">
        <p>.target-bottom</p>
      </div>
    </div>
  </article>
);
