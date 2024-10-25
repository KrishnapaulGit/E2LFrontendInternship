import React from 'react';
import './HeroSection.css';
import BannerImg from './images/newBannerImg.png'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="tagline">Your Success is Our Success</p>
        <h1>
          <span className="highlight">Master</span> Frontend <br /> with Different Way
        </h1>
        <p className="description">
          Easy 2 Learning offers professional internship classes and special features to
          help you to master your frontend skills and develop your career path.
        </p>
        <div className="button-container">
        <a href='https://play.google.com/store/apps/details?id=co.edvin.ubglj&pcampaignid=web_share' target='_blank'>
          <button className="get-started-btn">Get Started</button>
        </a>
        <a href='https://youtu.be/7AVlDXaXGEY?si=_b_e6PViip3lGeUt' target='_blank'>
          <button className="watch-video-btn">
            <span className="play-icon">▶</span> Watch Video
          </button>
        </a>
        </div>
      </div>
      
      {/* Add the image to the right side */}
      <div className="hero-image">
      <img src={BannerImg} alt="Frontend Course" />
      </div>
    </section>
  );
};

export default HeroSection;
