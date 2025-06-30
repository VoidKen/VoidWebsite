import React from 'react';

function SocialMedia() {
  return (
    <section id="social-media">
      <h2>Connect with Me</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
        <li>
          <a href="https://discord.com/users/1247845124529193022" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/discord.svg" alt="Discord" width="32" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/voidk.en?igsh=ZmJ1aGk0eWp0eGVm" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/instagram.svg" alt="Instagram" width="32" />
          </a>
        </li>
        <li>
          <a href="https://www.twitch.tv/voidkaneki1" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/twitch.svg" alt="Twitch" width="32" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default SocialMedia;