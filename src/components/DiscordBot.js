import React from 'react';

function DiscordBot() {
  return (
    <section id="discord-bot">
      <h2>
        <img
          src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/discord.svg"
          alt="Discord"
          style={{ width: '32px', verticalAlign: 'middle', marginRight: '0.5rem' }}
        />
        My Discord Bot
      </h2>
      <p>
        <strong>Bot Name:</strong> VoidBot<br />
        <strong>Description:</strong> A bot for community use. If you want to see all commands, do /help<br />
        <strong>Invite Link:</strong> <a href="https://discord.com/oauth2/authorize?client_id=1348700164184998010&permissions=8&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fcallback&integration_type=0&scope=guilds+guilds.join+bot" target="_blank" rel="noopener noreferrer">Invite my bot</a>
      </p>
    </section>
  );
}

export default DiscordBot;