import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { FlipWords } from "./ui/flip-words";
import { ColourfulText } from "./ui/colourful-text";

const Hero = () => {
  // Sample data
  const words = ["Transform", "Build", "Create", "Make"];
  return (
    <div>
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <FlipWords words={words} /> Your{" "}
          <ColourfulText
            text="Business with Digital
            Presence"
          />
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          We build innovative solutions for forward-thinking companies
        </p>
        <button className="bg-gradient-to-r from-purple-800 to-blue-600 text-white hover:gradient-to-r hover:from-emerald-800 hover:to-blue-600 px-8 py-3 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
      <div className="w-full bg-gradient-to-r from-gray-600 to-gray-900 flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
