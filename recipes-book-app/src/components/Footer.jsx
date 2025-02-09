import React from 'react';
import '../App.css';
import githubLogo from "../assets/github-logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <img src={githubLogo} alt="github logo"></img>
        </footer>
    );
};