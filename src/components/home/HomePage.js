import React from "react";
import profile from "../../Profile_Photo.png";
import Contact from "./Contact";

const HomePage = () => (
  <div className="page jumbotron">
    <h1 className="center">Hi, I&apos;m Shakeeb</h1>
    <div id="info">
      <img id="profile" className="center" src={profile} alt="Profile" />
      <p id="blurb" className="center">
        I am a former software engineer and currently a masters student at
        Radboud University studying Neurophysics. I am interested in
        programming, brazilian jiu-jitsu, and self-studying modern physics.
        Otherwise I enjoy learning random skills in my free time. My goal is to
        help bring about brain inspired general artificial intelligence and
        machine learning algorithms as I believe the brain has a lot to teach us
        about intelligence.
      </p>
    </div>
    <Contact />
    {/* <Link to="about" className="btn btn-primary btn-lg">
      Learn More
    </Link> */}
  </div>
);

export default HomePage;
