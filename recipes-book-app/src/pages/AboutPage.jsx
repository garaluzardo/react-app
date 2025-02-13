import React from "react";
import { Link, Route, Router } from "react-router-dom";
import GHLogo from "../assets/GH.png";
import LDNLogo from "../assets/in.png";
import GaraProfile from "../assets/gara-cropped.jpg";
import AythaProfile from "../assets/aytha-profile.png";

export default function AboutPage() {
    return (
        <div className="about-page">

            <div className="gara-details">
                
                <img className="profile-picture" src={GaraProfile} alt="Profile picture" />
                <p>Gara Luzardo</p>

                <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer" >
                <img src={GHLogo} alt="GitHub" />
                </a>

                <a>
                <img src={LDNLogo} alt="LinkedIn" /> 
                </a>
                
            </div>

            <div className='aytha-details'>
                <img className="profile-picture" src={AythaProfile} alt="Profile picture" />
                <p>Aythamy Peinado</p>

                <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer" >
                <img src={GHLogo} alt="GitHub" />
                </a>

                <a>
                <img src={LDNLogo} alt="LinkedIn" /> 
                </a>
                
            </div>
        </div>
    );
}