import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs />
      <header className="App-header">
        <h1>Welcome to My Website!</h1>
      </header>
      <main>
        {/* The content is now controlled by the Tabs component */}
      </main>
    </div>
  );
}

export default App;