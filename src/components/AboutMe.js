import React from 'react';

function AboutMe() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img
        src="https://i.postimg.cc/3rGzTQKw/unnamed.jpg" // Replace with your own image URL if you want
        alt="Profile"
        style={{ borderRadius: '50%', width: '120px', marginBottom: '1rem' }}
      />
      <p>
        Hi, I'm VoidKen ! I love coding and building Discord bots and I love managing Minecraft servers.
      </p>
    </section>
  );
}

export default AboutMe;