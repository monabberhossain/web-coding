import React from 'react';
import photo from '../../../src/photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Side.css'

const Side = (props) => {
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
                    <h2>Add A Break</h2>
                    <div className='break-option'>
                        <button className='time-button'>10s</button>
                        <button className='time-button'>20s</button>
                        <button className='time-button'>30s</button>
                        <button className='time-button'>40s</button>
                        <button className='time-button'>50s</button>
                    </div>
                </div>
                <div className="study-detail">
                    <h2>Study Details</h2>
                    <div>
                        <p className='study-time'>Study Time<span className='unit'>minute</span></p>
                        <p className='study-time'>Break Time<span className='unit'>seconds</span></p>
                    </div>
                </div>
                <button className='btn-cart activity-completed'>Activity Completed</button>                
            </div>
        </div>
    );
};

export default Side;