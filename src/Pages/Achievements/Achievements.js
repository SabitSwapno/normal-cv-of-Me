import React from 'react';
import Footer from '../Shared/Footer';
import NavigateBar from '../Shared/NavigateBar';
import './Achievements.css'

const Achievements = () => {
    return (
        <>
            <NavigateBar></NavigateBar>
            <div className='container'>
                <h1 className='mt-2 mb-3 fw-bold'>Achiev<span style={{
                    color: "rgb(246, 36, 85)",
                }}>ements</span> </h1>
                <div className='container'>
                    <div className="card mb-3 cardbgCus">
                        <div className="row g-0 justify-content-center align-items-center">
                            <div className="col-md-4 imgset">
                                <img style={{
                                    width: "50%"
                                }} src="https://i0.wp.com/educationsinbd.com/wp-content/uploads/2018/09/Educationsinbd-pic-4-post-61.jpg?resize=800%2C445&ssl=1" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">National Skill Standard Course</h2>
                                    <h6 className="card-text">Passed as a "General Electrician" in
                                        National Skill Standard Basic Course</h6>
                                    <h6 className="card-text"><small className="text-muted">-2018</small></h6>
                                    <a className='Custombutton1' href="https://drive.google.com/file/d/1cQg8QGjMHMU3GizILmLzZe97QglFJdCH/view?usp=sharing" target="_blank">View Certificate</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 cardbgCus">
                        <div className="row g-0 justify-content-center align-items-center">
                            <div className="col-md-4 imgset">
                                <img style={{
                                    width: "65%"
                                }} src="https://cdn.dribbble.com/users/1488337/screenshots/6944906/programming_hero_logo.jpg?compress=1&resize=400x300&vertical=top" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">Web Developing</h2>
                                    <h6 className="card-text">Completed Web-Development course
                                        with high average marks in
                                        Programming hero</h6>
                                    <h6 className="card-text"><small className="text-muted">-2021</small></h6>
                                    <a className='Custombutton1' href="https://drive.google.com/file/d/1zLi7oIOVt7CR_OinxAUEpNR1uLpFq8_O/view?usp=sharing" target="_blank">View Certificate</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 cardbgCus">
                        <div className="row g-0 justify-content-center align-items-center">
                            <div className="col-md-4 imgset">
                                <img style={{
                                    width: "45%"
                                }} src="https://i.ibb.co/Z6MnMjf/achievement.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">Song Submission</h2>
                                    <h6 className="card-text">Participated and submitted a song to
                                        an Album called "Oboseshe" with
                                        band Enharmonic</h6>
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

export default Achievements;