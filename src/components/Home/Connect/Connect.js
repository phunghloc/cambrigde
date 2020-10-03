import React from 'react';
import { LightSpeed, Bounce } from 'react-reveal';

import './Connect.css';
import banner1 from '../../../assets/img/facebook-banner-learners.jpg';
import banner2 from '../../../assets/img/facebook-banner-teachers.jpg';
import social from '../../../assets/img/sprite-social-media.png';

const connect = () => {
    return (
        <div className="pt-5 text-center">
            <h2>Connect with Cambridge English</h2>
            <p className="py-3">Join our growing online community to get learning tips, read advice from experts, and see what we’re working on.</p>
            <div className="Connect-Img">
                <LightSpeed left>
                    <img className="my-2" src={banner1} alt="Community for learners"/>
                </LightSpeed>
                
                <LightSpeed right>
                    <img className="my-2" src={banner2} alt="Community for teachers"/>
                </LightSpeed>
            </div>

            <Bounce bottom cascade>
                <div className="Connect-Social m-4">
                    <div className="Connect-Social-item mx-2"><img src={social} alt="social"/></div>
                    <div className="Connect-Social-item mx-2"><img src={social} alt="social"/></div>
                    <div className="Connect-Social-item mx-2"><img src={social} alt="social"/></div>
                    <div className="Connect-Social-item mx-2"><img src={social} alt="social"/></div>
                    <div className="Connect-Social-item mx-2"><img src={social} alt="social"/></div>
                    <div className="Connect-Social-item mx-2"><img src={social} alt="social"/></div>
                </div>
            </Bounce>
        </div>
    );
}

export default connect;