import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>JS Kyle</h1>
        <p>I am a React engineer with 5 years of experience based in Denver, CO. I have worked on e-commerce apps, SaaS platforms and with agency clients. Looking to show the world how to code and what I am capable of.</p>
        <h6>Portfolio - Summer 2021</h6>
        <div className="link-container">
          <a href="https://www.youtube.com/channel/UChIWCTGQdENUzgf5BJD6Fkw" target="_blank" rel="noreferrer noopener">YouTube</a>
          <a href="https://www.github.com/jskyle" target="_blank" rel="noreferrer noopener">GitHub</a>
          <a href="mailto:hello@jskyle.com?subject=Hello Kyle" target="_blank" rel="noreferrer noopener">Email</a>
        </div>
      </div>
    </div>
  );
}

export default App;
