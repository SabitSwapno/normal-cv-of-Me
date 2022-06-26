import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../Shared/Footer';
import NavigateBar from '../Shared/NavigateBar';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faGuitar } from '@fortawesome/free-solid-svg-icons';
import './Skills.css'

const Skills = () => {
    return (
        <>
            <NavigateBar></NavigateBar>
            <div className='container'>
                <h1 className='mt-2 mb-4 fw-bold'>My <span style={{
                    color: "rgb(246, 36, 85)",
                }}>Skills</span> </h1>
                <div className="row p-3 g-3 d-flex justify-content-center align-items-center skillsBG mb-3">
                    <div className='col-md-6 col-sm-12'>
                        <div className="row d-flex p-3 mb-2 justify-content-center align-items-center smallDivBG">
                            <div className="col-3">
                                <h2><FontAwesomeIcon icon={faUserGroup} /></h2>
                            </div>
                            <div className="col-9">
                                <h4 className='fw-bolder'>Strong Communication</h4>
                                <h6>A cool minded person with strong convincing power which helps to create a great bond with customers.</h6>
                            </div>
                        </div>
                        <div className="row d-flex p-3 mb-2 justify-content-center align-items-center smallDivBG">
                            <div className="col-3">
                                <h2><FontAwesomeIcon icon={faMicrophone} /></h2>
                            </div>
                            <div className="col-9">
                                <h4 className='fw-bolder'> Public Speaking</h4>
                                <h6>A confident personality with clear oral abilities.</h6>
                            </div>
                        </div>
                        <div className="row d-flex p-3 mb-2 justify-content-center align-items-center smallDivBG">
                            <div className="col-3">
                                <h2><FontAwesomeIcon icon={faListCheck} /></h2>
                            </div>
                            <div className="col-9">
                                <h4 className='fw-bolder'>Project Management</h4>
                                <h6>A disciplined person who managed few events & projects by creating schedules and also look after those who finished it on time .</h6>
                            </div>
                        </div>
                        <div className="row d-flex p-3 mb-2 justify-content-center align-items-center smallDivBG">
                            <div className="col-3">
                                <h2><FontAwesomeIcon icon={faPeopleGroup} /></h2>
                            </div>
                            <div className="col-9">
                                <h4 className='fw-bolder'>Leadership</h4>
                                <h6>Bold attitude that helps to managed a group of people many times for various projects.</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div className="row d-flex p-3 mb-2 justify-content-center align-items-center smallDivBG">
                            <div className="col-3">
                                <h2><FontAwesomeIcon icon={faCode} /></h2>
                            </div>
                            <div className="col-9">
                                <h4 className='fw-bolder'>Web-Developing</h4>
                                <h6>A certified Web Developer who has finished his web-development course from Programming hero.</h6></div>
                        </div>
                        <div className="row d-flex p-3 mb-2 justify-content-center align-items-center smallDivBG">
                            <div className="col-3">
                                <h2><FontAwesomeIcon icon={faComputer} /></h2>
                            </div>
                            <div className="col-9">
                                <h4 className='fw-bolder'>Computer Literacy</h4>
                                <h6>Good knowledge about operating computer and digital electronic devices.</h6>
                            </div>
                        </div>
                        <div className="row d-flex p-3 mb-2 justify-content-center align-items-center smallDivBG">
                            <div className="col-3">
                                <h2><FontAwesomeIcon icon={faClock} /></h2>
                            </div>
                            <div className="col-9">
                                <h4 className='fw-bolder'>Time Management</h4>
                                <h6>A disciplined person who always believe to work in time to time.</h6>
                            </div>
                        </div>
                        <div className="row d-flex p-3 mb-2 justify-content-center align-items-center smallDivBG">
                            <div className="col-3">
                                <h2><FontAwesomeIcon icon={faGuitar} /></h2>
                            </div>
                            <div className="col-9">
                                <h4 className='fw-bolder'>Musical knowledge</h4>
                                <h6>Have a good knowledge about music and also knows how to play guitars.</h6></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Skills;