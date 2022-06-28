import React from 'react';
import Footer from '../Shared/Footer';
import NavigateBar from '../Shared/NavigateBar';
import './Experiences.css'

const Experiences = () => {
    return (
        <>
            <NavigateBar></NavigateBar>
            <div className='container'>
                <h1 className='mt-2 mb-4 fw-bold'>Volunteer <span style={{
                    color: "rgb(246, 36, 85)",
                }}>Experiences</span> </h1>
                <div className='container'>
                    <div className="card mb-3 cardbgCus">
                        <div className="row g-0 justify-content-center align-items-center">
                            <div className="col-md-4 imgset">
                                <img style={{
                                    width: "50%"
                                }} src="https://i.ibb.co/gMPZ3vV/Metal-Carnival.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">Metal Carnival</h2>
                                    <h6 className="card-text">ENVENOM and ENHARMONIC aligned together to organize this event. So, that could be the biggest underground show that Rajshahi has never seen before!!!!</h6>
                                    <h6 className="card-text"><small className="text-muted">-2019</small></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 cardbgCus">
                        <div className="row g-0 justify-content-center align-items-center">
                            <div className="col-md-4 imgset">
                                <img style={{
                                    width: "65%"
                                }} src="https://i.ibb.co/k4pdr1t/new-cover3-png-1.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">Bring back a Smile</h2>
                                    <h6 className="card-text">The Agrani School's 16th Batch & Band Enharmonic organized this charity show for a Blood Cancer patient. After the show they was able to give the patient a decent amount of money for her treatment.</h6>
                                    <h6 className="card-text"><small className="text-muted">-2022</small></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 cardbgCus">
                        <div className="row g-0 justify-content-center align-items-center">
                            <div className="col-md-4 imgset">
                                <img style={{
                                    width: "65%"
                                }} src="https://i.ibb.co/HChF44S/Summer-Combat.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">Summer Combat</h2>
                                    <h6 className="card-text">Genesis Music Home is going to present an underground concert for metal heads of Rajshahi. The main motto of this UG is promoting some new talented bands with some familiar bands of Rajshahi.</h6>
                                    <h6 className="card-text"><small className="text-muted">-2019</small></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Experiences;