import React from "react";

const About = () => {
  return (
    <section className="c-space section-spacing">
      <h1>About me</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="public/icons/kkk.jpg"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt=""
          />
          <div className="z-10">
            <h2 className="headtext">Hi, I am Kelia</h2>
            <p>
              I’m a tech enthusiast who enjoys coding, designing, and exploring
              new technologies (with over 2 years of experience). Always curious, always learning — building one
              project at a time.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/2 bg-gradient-to-t from-indigo"></div>
        </div>
        <div className="grid-default-color grid-2"></div>
        <div className="grid-black-color grid-3"></div>
        <div className="grid-special-color grid-4"></div>
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
