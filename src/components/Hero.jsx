import React from "react";
import Button from "./Button.jsx";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO BECOME A</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Huge<span className="text-green-300">Jacked</span>Man
        </h1>
      </div>
      <p className="text-sm md:text-base font-light p-20 md:p-0">
        I hereby acknowledge that I may become
        <span className="text-black font-medium"> unbelievably jacked </span>
        and accept all risks of becoming the local
        <span className="text-black font-medium"> huge man</span>, afflicted
        with severe body dysmorphia, unable to control ladies following me and
        fit through doors.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept and Begin"}
      ></Button>
    </div>
  );
}

export default Hero;
