import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
    return (
        <header>
            <h1>'Study & Memorize'</h1>
            <button  onClick={() => alert("Hello from the Header!")}>Click Me</button>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">Create Cards</a></li>
                    <li><a href="#">Review</a></li>
                    <li><a href="#">Quiz Mode</a></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/review-cards">Review Cards</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;  