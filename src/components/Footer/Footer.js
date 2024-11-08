import React from "react";
import './Footer.css';
import footer_img from '../assets/logo_big.png';
import { FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_img} alt="Shopper logo" className="logo-image" />
                <p className="website-name">SHOPPER</p>
            </div>
            <div className="footer-info">
                <p>Created by Pushkar Varshney</p>
                <div className="footer-links">
                    <a href="mailto:appushkarvarshney@gmail.com" className="footer-icon">
                        <FaEnvelope />
                    </a>
                    <a href="https://github.com/M-Pushkar-Varshney-K" className="footer-icon" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/m.pushkar.varshney.k/" className="footer-icon" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
