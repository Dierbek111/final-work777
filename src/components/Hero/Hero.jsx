// Делал Диербек, 3 страница

import s from "./Hero.module.scss";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className={s.hero}>
        <div className="container">
          <div className={s.wrapper}>
            <img src="/OurServicebgi.svg" alt="" className={s.ourservicebgi} />
            <div className={s.text}>
              <h1>Our Service</h1>
            </div>
            <div className={s.text_down}>
              <p>Home</p> <p>&gt;</p> <p className={s.grey}>Our Service</p>
            </div>
          </div>
          <div className={s.line}></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
