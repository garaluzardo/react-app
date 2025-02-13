import React from "react";
import { Link, Route, Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NotFound from "../assets/404.png"
export default function NotFoundPage() {
    return (
        <div className="not-found-page">
            <img src={NotFound} alt="404" />
        </div>
    )
}