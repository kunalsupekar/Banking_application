import React from 'react';


const HeroSection = () => {
  const heroSectionStyles = {
    position: 'absolute',
    width: 100,
    height: '570px',
  };

  const contentStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#ffffff',
  };

  const headingStyles = {
    fontSize: '36px',
    marginBottom: '20px',
  };

  const paragraphStyles = {
    fontSize: '18px',
    marginBottom: '30px',
  };

  const buttonStyles = {
    display: 'inline-block',
    padding: '12px 30px',
    backgroundColor: '#ff0000',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '16px',
  };

  return (
    <div>    
        <div 
        style={heroSectionStyles}>
      {/* <img src="hero-image.jpg" alt="Hero Image" style={imageStyles} /> */}
      <div style={contentStyles}>
        <h1 style={headingStyles}>Welcome to Our Website</h1>
        <p style={paragraphStyles}>Discover the amazing world of our products and services.</p>
        <a href="/" style={buttonStyles}>Learn More</a>
      </div>

      </div>

   
    </div>

    
  );
};

export default HeroSection;
