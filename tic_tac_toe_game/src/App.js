import React from 'react';
import './App.css';

import TicTacToe from "./TicTacToe";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn" tabIndex={-1} style={{pointerEvents: "none"}} aria-hidden="true">TicTacToe Classic</button>
          </div>
        </div>
      </nav>
      <main>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "82vh" }}>
          <h1 className="title" style={{margin: "46px 0 26px", fontSize: "2.3rem", fontWeight: 650, color: "#2196f3"}}>TicTacToe Classic</h1>
          <TicTacToe />
        </div>
      </main>
    </div>
  );
}

export default App;