import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="row justyfy-content-around align-items-center">
                <div className="col-3 about-school">
                    <h3>About School</h3>
                    <p>General Information</p>
                    <p>Who We Are</p>
                    <p>Our Teachers</p>
                    <p>School History</p>
                </div>
                <div className="col-3 our-classes">
                <h3>Our Classes</h3>
                    <p>Musical Instruments</p>
                    <p>Vocal Classes</p>
                    <p>Theory Classes</p>
                    <p>All Prices</p>
                </div>
                <div className=" col-3 our-approch">
                <h3>Our Approach</h3>
                    <p>How We Work</p>
                    <p>Certificates</p>
                    <p>Our Qualifications</p>
                    <p>What We Do</p>
                </div>
                <div className="col-3 our-programs">
                <h3>Our Programs</h3>
                    <p>Summer Camp</p>
                    <p>Individual</p>
                    <p>Group Classes</p>
                    <p>Early Childhood</p>
                </div>
            </div>
            <hr className='bg-gray border'/>

            <p>ThemeREX &copy; 2021. All rights reserved</p>
        </div>
    );
};

export default Footer;