import React, { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";


const About = () => {
  const grid2container= useRef();
  return (
    <section className="c-space section-spacing">
      <h1 className="headtext font-black text-5xl">About me</h1>
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
              I’m a tech enthusiast who enjoys coding, and exploring new
              technologies (with over 2 years of experience). Always curious,
              always learning — building one project at a time.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/2 bg-gradient-to-t from-indigo"></div>
        </div>
        <div className="grid-default-color grid-2">
          <div ref={grid2container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">
              Code is craft
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Scalable"
              containerRef={grid2container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SEO"
              containerRef={grid2container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Maintainable"
              containerRef={grid2container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Clean code"
              containerRef={grid2container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Fast"
              containerRef={grid2container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="public/logos/blender-removebg-preview.png"
              containerRef={grid2container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "35%" }}
              image="public/logos/react-removebg-preview.png"
              containerRef={grid2container}
            />
            <Card
              style={{ rotate: "-30deg", top: "40%", left: "70%" }}
              image="public/logos/next-removebg-preview.png"
              containerRef={grid2container}
            />
            <Card
              style={{ rotate: "10deg", top: "10%", left: "35%" }}
              image="public/logos/laravel-removebg-preview.png"
              containerRef={grid2container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "20%" }}
              image="public/logos/java-removebg-preview.png"
              containerRef={grid2container}
            />
          </div>
        </div>
        <div className="grid-black-color grid-3">
          <div className="z-10 w-full">
            <p className="headtext">Timezone</p>
            <p className="subtext">I am based in Kigali and open to work anywhere</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        <div className="grid-special-color grid-4 size-full text-center  ">
          <p className="text-center headtext pt-15">Do you want to start a project together? </p>
          <CopyEmailButton />
        </div>
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
