import React from "react";
import profile from "../../Profile_Photo.png";
import Contact from "./Contact";

const HomePage = () => (
  <div className="flex flex-row items-center mt-10 mx-32 space-x-4">
    <img
      className="object-scale-down h-96 w-full"
      src={profile}
      alt="Profile"
    />
    <div className="flex flex-col justify-center items-center space-y-4">
      <h1 className="h1">Hi, I&apos;m Shakeeb</h1>
      <p className="text-center">
        I am a former software engineer and currently a masters student at
        Radboud University studying Neurophysics. I am interested in
        programming, brazilian jiu-jitsu, and self-studying modern physics.
        Otherwise I enjoy learning random skills in my free time. My goal is to
        help bring about brain inspired general artificial intelligence and
        machine learning algorithms as I believe the brain has a lot to teach us
        about intelligence.
      </p>
      <Contact />
    </div>
  </div>
);

export default HomePage;
