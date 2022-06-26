import React from 'react';
import Footer from '../Shared/Footer';
import NavigateBar from '../Shared/NavigateBar';
import './Home.css'

const Home = () => {
    return (
        <>
            <NavigateBar></NavigateBar>
            <div className='BGPic'>
                <img className='img-fluid' src="https://i.ibb.co/T8CMgKJ/IMG-20220204-045725-418-1.jpg" alt="" />
                <div className='BGtext'>
                    <div className='col-md-6 col-sm-12'>
                        <h1 style={{
                            fontWeight: "900",
                            color: "rgb(246, 36, 85)"
                        }}>Sabit Swapno</h1>
                        <h3 style={{
                            fontWeight: "400",
                            color: "#dee2e6"
                        }}>Undergraduate Student</h3>
                        <br />
                        <h2 style={{
                            fontWeight: "800",
                            color: "#212529"
                        }}>Profile</h2>
                        <h5 className='py-3 px-5'>Hardworking and motivated speaker with
                            the ability of establish and maintain a
                            good relationship with public. Have
                            leadership skills which leads to better
                            project managements. very punctual and
                            always work on productivity. Additionally,
                            A Web-Developer who has acquired all the
                            basic knowledge about Web-Developing
                            and Computer Literacy. Want to express
                            creative skills for self and company
                            growth.</h5>
                        <br />
                        <a className='Custombutton' href="https://drive.google.com/uc?export=download&id=1NQaHOIrM2VTRvqNTDGzjTDQqaUPSTi9V">Download CV</a>
                    </div>
                    <div className='col-md-6 col-sm-12'>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;