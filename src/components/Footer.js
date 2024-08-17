import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li><a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="mailto:your-email@gmail.com">Gmail</a></li>
        <li><a href="https://www.hackerrank.com/your-hackerrank" target="_blank" rel="noopener noreferrer">HackerRank</a></li>
        <li><a href="https://www.kaggle.com/your-kaggle" target="_blank" rel="noopener noreferrer">Kaggle</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
