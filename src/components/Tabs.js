import React, { useState } from 'react';
import AboutMe from './AboutMe';
import DiscordBot from './DiscordBot';
import SocialMedia from './SocialMedia';
import EmailMe from './EmailMe';

function Tabs() {
  const [showTabs, setShowTabs] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  if (!showTabs) {
    return (
      <div style={{ textAlign: 'center', margin: '2rem' }}>
        <button onClick={() => setShowTabs(true)} style={{ fontSize: '1.2rem', padding: '0.7rem 2rem' }}>
          Show Tabs
        </button>
      </div>
    );
  }

  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
        <button onClick={() => setActiveTab('about')} style={{ fontWeight: activeTab === 'about' ? 'bold' : 'normal' }}>
          About Me
        </button>
        <button onClick={() => setActiveTab('bot')} style={{ fontWeight: activeTab === 'bot' ? 'bold' : 'normal' }}>
          My Discord Bot
        </button>
        <button onClick={() => setActiveTab('social')} style={{ fontWeight: activeTab === 'social' ? 'bold' : 'normal' }}>
          Social Media
        </button>
        <button onClick={() => setActiveTab('email')} style={{ fontWeight: activeTab === 'email' ? 'bold' : 'normal' }}>
         Email Me
        </button>
        <button onClick={() => setShowTabs(false)} style={{ marginLeft: '2rem', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Hide Tabs
        </button>
      
      </nav>
      <div>
        {activeTab === 'about' && <AboutMe />}
        {activeTab === 'bot' && <DiscordBot />}
        {activeTab === 'social' && <SocialMedia />}
        {activeTab === 'email' && <EmailMe />}
      </div>
    </div>
  );
}

export default Tabs;