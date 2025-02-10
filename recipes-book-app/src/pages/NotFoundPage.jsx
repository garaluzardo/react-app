import React from "react";
import { Link, Route, Router } from "react-router-dom";
import styles from "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";


export default function NotFoundPage() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <Link to="/">HomePage</Link>
        </div>
    )
}