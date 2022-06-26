import React from 'react';
import Footer from '../Shared/Footer';
import NavigateBar from '../Shared/NavigateBar';

const AboutMe = () => {
    return (
        <>
            <NavigateBar></NavigateBar>
            <div style={{
                marginTop: "0.8rem",
                marginBottom: "1.2rem",
            }}>
                <h1>About <span style={{
                    color: "#F62455",
                }}>Me</span></h1>
                <div className="row text-start ms-2 d-flex justify-content-center align-items-center mt-0 mx-auto">
                    <div className="col-md-6 col-sm-12">
                        <h3 className='fw-bold'>Personal Info</h3>
                        <div className="row text-start">
                            <div className="col-6">
                                <h4>First Name</h4>
                                <h5 className="fw-bolder">Sabit</h5>
                                <br />
                                <h4>Age</h4>
                                <h5 className="fw-bolder">23 Years</h5>
                                <br />
                                <h4>Phone</h4>
                                <h5 className="fw-bolder">+880 1787 040018</h5>
                                <br />
                                <h4>Email</h4>
                                <h5 className="fw-bolder">sabitswapno3@gmail.com</h5>
                                <br />
                                <h4>Linked In</h4>
                                <a target="_blank" style={{
                                    color: "#F62455",
                                    fontSize: "18px"
                                }} href="https://www.linkedin.com/in/sabit-swapno-397850216/">linkedin/sabitswapno</a>
                            </div>
                            <div className="col-6">
                                <h4>Last Name</h4>
                                <h5 className="fw-bolder">Swapno</h5>
                                <br />
                                <h4>Nationality</h4>
                                <h5 className="fw-bolder">Bangladeshi</h5>
                                <br />
                                <h4>Address</h4>
                                <h5 className="fw-bolder">Banasree D-Block, Rampura, Dhaka</h5>
                                <br />
                                <h4>Facebook</h4>
                                <a target="_blank" style={{
                                    color: "#F62455",
                                    fontSize: "18px"
                                }} href="https://www.facebook.com/Ibne.sabit.swapno">facebook/ibne.sabit.swapno</a>
                                <br />
                                <h4 className='pt-4'>Github</h4>
                                <a target="_blank" style={{
                                    color: "#F62455",
                                    fontSize: "18px"
                                }} href="https://github.com/SabitSwapno">github/sabitswapno</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <br />
                        <h3 className='pb-1'>Education</h3>
                        <h5>BSc in EEE in Green University of Bangladesh.
                            <br /> • Dept: Electrical & Electronics Engineering
                            <br /> • Status: On Going (2022-Present)
                        </h5>
                        <h5>Graduate from Rajshahi Polytechnic Institute
                            <br />   • Degree: Diploma Electrical Engineer
                            <br />  • Duration: 5 years (2016-2021)
                            <br />  • GPA - 3.09 out of 4</h5>
                        <h5>
                            Completed High School from Agrani School and College
                            <br />
                            • Class 2 - Class 10
                            <br /> • Duration: 10 years (2007-2016)
                            <br /> • GPA - 4.33 out of 5
                        </h5>
                        <br />
                        <h3 className='pb-1'>Languages</h3>
                        <h5>
                            • English - Working proficiency
                            <br /> • Bangla - Native</h5>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AboutMe;