import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./style.css";

const CounterUpPage = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div
        style={{
          width: "85%",
          background: "black",
          margin: "1000px auto 300px auto",
          /*
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "1000px",
          marginBottom: "300px",
          */
          color: "white",
          padding: "50px",
        }}
      >
        <div className="counters">
          <div>
            <h1>
              {counterOn && (
                <CountUp start={0} end={100} duration={2} delay={0.5} />
              )}
            </h1>
            <h1 className="yell"> godina postojanja</h1>
          </div>
          <div>
            <h1>
              {counterOn && (
                <CountUp start={0} end={40000} duration={2} delay={0} />
              )}
              +
            </h1>
            <h1 className="yell"> korisnika</h1>
          </div>
          <div>
            <h1>
              {counterOn && (
                <CountUp start={0} end={100000} duration={2.5} delay={0} />
              )}
              +
            </h1>
            <h1 className="yell"> projekata</h1>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CounterUpPage;
