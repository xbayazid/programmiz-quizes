import React from 'react';
import headerImg from '../../Header_img.webp';
import { Container } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Container>
                <div className='mt-5'>
                    <div className='home'>
                        <h1>Welcome to Programmiz Quiz</h1>
                        <button className='home-btn border-0 mt-3 rounded-3 text-white fw-bold'>
                            <Link to='/quiz'>Get Started</Link>
                        </button>
                    </div>
                    <div className='home-img'>
                        <img className='img-fluid' src={headerImg} alt="" />
                    </div>
                    
                </div>
            </Container>
        </div>
    );
};

export default Home;