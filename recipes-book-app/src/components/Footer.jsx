import React from 'react';
import '../App.css';
import githubLogo from "../assets/github-logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/garaluzardo/react-app" target="_blank">
            <img src={githubLogo} alt="github logo"></img>
            </a>
        </footer>
    );
};