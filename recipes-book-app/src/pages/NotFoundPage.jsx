import React from "react";
import { Link, Route, Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="not-found">
            <h1>404</h1>
            {/* <img> aqui va un meme </img> */}
            <Link to="/">retorno a HomePage</Link>
        </div>
    )
}