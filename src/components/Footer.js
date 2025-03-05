import React from 'react';
import './Footer.css';
function Footer() {
    return (
        <footer>
            <p> {new Date().getFullYear()} Flashcard Study Tool.All rights reserved.</p>
            <p>Review your flashcards daily for better retention!"</p>
            <a href="#">Contact:flashcards@example.com</a>
        </footer>
    );
}
export default Footer;

