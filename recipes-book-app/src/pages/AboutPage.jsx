import React from "react";
import { Link, Route, Router } from "react-router-dom";
import GHLogo from "../assets/GH.png";
import LDNLogo from "../assets/in.png";
import GaraProfile from "../assets/gara-cropped.jpg";
import AythaProfile from "../assets/aytha-profile.png";

export default function AboutPage() {
    return (
        <>
            <div className="about-page-container">
                <p>Recipe Journal es una aplicación de una sola página (SPA) desarrollada con React, diseñada para que los usuarios puedan crear, gestionar y actualizar sus recetas favoritas de manera sencilla.</p>
                <p>A lo largo del proceso, hemos aplicado conceptos clave, añadiendo funcionalidades y optimizándola en cada etapa, de manera progresiva.</p>
                <p>Nuestro objetivo ha sido crear una experiencia fluida e intuitiva, permitiendo a los usuarios organizar sus recetas de manera eficiente.</p>
                <p>Ahora contamos con una aplicación funcional y dinámica que refleja nuestro aprendizaje.</p>

                <div className="about-page">
                    <div className="gara-details">
                        <img className="profile-picture" src={GaraProfile} alt="Profile picture" />
                        <p>Gara Luzardo</p>
                        <div className="logos">
                            <a href="https://github.com/garaluzardo" target="_blank" rel="noopener noreferrer" >
                                <img src={GHLogo} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/garaluzardo/" target="_blank" rel="noopener noreferrer" >
                                <img src={LDNLogo} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    <div className='aytha-details'>
                        <img className="profile-picture" src={AythaProfile} alt="Profile picture" />
                        <p>Aythamy Peinado</p>
                        <div className="logos">
                            <a href="https://github.com/aythp" target="_blank" rel="noopener noreferrer" >
                                <img src={GHLogo} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/aytha-pf/" target="_blank" rel="noopener noreferrer" >
                                <img src={LDNLogo} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}