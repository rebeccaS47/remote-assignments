import React, { useState } from "react";

import CallAction from "./CallAction";

const Section = () => {
  const [isCallAction, setIsCallAction] = useState(false);

  return (
    <section className="row">
      <h2>Section Title</h2>
      <div className="container">
        <div className="box">
          <p>Content Box 1</p>
        </div>
        <div className="box">
          <p>Content Box 2</p>
        </div>
        <div className="box">
          <p>Content Box 3</p>
        </div>
        <div className="box">
          <p>Content Box 4</p>
        </div>
      </div>

      <div className="button">
        <button
          type="button"
          className="callbtn"
          onClick={() => setIsCallAction((prevValue) => !prevValue)}
        >
          Call to Action
        </button>
      </div>
      <CallAction isCallAction={isCallAction} />
    </section>
  );
};

export default Section;
