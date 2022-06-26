import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3 style={{
                            color: "rgb(246, 36, 85)"
                        }}>Services</h3>
                        <ul>
                            <li><a href="#">Strong Communication</a></li>
                            <li><a href="#">Web Development & Hosting</a></li>
                            <li><a href="#">Project Management</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3 style={{
                            color: "rgb(246, 36, 85)"
                        }}>About</h3>
                        <ul>
                            <li><a href="#">Objective </a></li>
                            <li><a href="#">Education </a></li>
                            <li><a href="#">Careers </a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3 style={{
                            color: "rgb(246, 36, 85)"
                        }}>Summary</h3>
                        <p className="text-white">To acquire confidence and fame using my prospect in the field and express my creative skills for self and company growth. </p>
                    </div>
                    <div className="col item social"><a target="_blank" href="https://www.facebook.com/Ibne.sabit.swapno"><i className="fab fa-facebook"></i></a><a target="_blank" href="https://www.linkedin.com/in/sabit-swapno-397850216/"><i className="fab fa-linkedin-in"></i></a><a target="_blank" href="https://github.com/SabitSwapno"><i className="fab fa-github"></i></a><a target="_blank" href="https://www.instagram.com/sabit.swapno/"><i className="fab fa-instagram"></i></a></div>
                </div>
                <p className="text-white mt-2 pt-3">© All Right Reserved <span style={{
                    color: "rgb(246, 36, 85)",
                    fontWeight: "700"
                }}> Sabit Swapno</span>  2022</p>
            </div>
        </div>
    );
};

export default Footer;