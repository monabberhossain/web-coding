import React from 'react';
import photo from '../../../src/photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Side.css'

const Side = () => {
    return (
        <div className='side'>
            <div className="profile">
                <div className="profile-info">
                    <div className="profile-img">
                        <img src={photo} alt="" />
                    </div>
                    <div className="profile-bio">
                        <h2>Monabber Hossain</h2>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> Sherpur, Bangladesh</p>
                    </div>
                </div>
                <div className="profile-expertise">
                    <div className='expert-field'>
                        <h2>HTML</h2>
                        <p><span className='year'>10</span><small> yrs</small></p>
                    </div>
                    <div id='expert-field' className='expert-field'>
                        <h2>CSS</h2>
                        <p><span className='year'>10</span><small> yrs</small></p>
                    </div>
                    <div className='expert-field'>
                        <h2>Javascript</h2>
                        <p><span className='year'>5</span><small> yrs</small></p>
                    </div>
                </div>
                <div className="add-break">
                    <h2></h2>
                </div>
                <div className="study-detail"></div>
            </div>
        </div>
    );
};

export default Side;