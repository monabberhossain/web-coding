import React, { useEffect, useState } from "react";
import photo from "../../../src/photo.jpg";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./Side.css";

// getting data from local storage
const getBreakTime = () => {
  const breakTimes = localStorage.getItem("break_time");
  if (breakTimes) {
    return JSON.parse(localStorage.getItem("break_time"));
  } else {
    return 0;
  }
};

const Side = ({ studyTime }) => {
  const [breakTime, setBreakTime] = useState(getBreakTime());

  useEffect(() => {
    localStorage.setItem("break_time", JSON.stringify(breakTime));
  }, [breakTime]);

  return (
    <div className="side">
      <div className="profile">
        <div className="profile-info">
          <div className="profile-img">
            <img src={photo} alt="" />
          </div>
          <div className="profile-bio">
            <h2>Monabber Hossain</h2>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> Sherpur,
              Bangladesh
            </p>
          </div>
        </div>
        <div className="profile-expertise">
          <div className="expert-field">
            <h2>HTML</h2>
            <p>
              <span className="year">10</span>
              <small> yrs</small>
            </p>
          </div>
          <div id="expert-field" className="expert-field">
            <h2>CSS</h2>
            <p>
              <span className="year">10</span>
              <small> yrs</small>
            </p>
          </div>
          <div className="expert-field">
            <h2>Javascript</h2>
            <p>
              <span className="year">5</span>
              <small> yrs</small>
            </p>
          </div>
        </div>
        <div className="add-break">
          <h2>Add A Break</h2>
          <div className="break-option">
            {[10, 20, 30, 40, 50].map((seconds, index) => (
              <button
                key={index}
                onClick={() => setBreakTime(seconds)}
                className={`time-button ${seconds === breakTime && "active"}`}
              >
                {seconds}s
              </button>
            ))}
          </div>
        </div>
        <div className="study-detail">
          <h2>Study Details</h2>
          <div>
            <p className="study-time">
              Study Time<span className="unit">{studyTime} minute</span>
            </p>
            <p className="study-time">
              Break Time<span className="unit">{breakTime} seconds</span>
            </p>
          </div>
        </div>
        <button
          onClick={() => toast.success("Activity completed successfully")}
          className="btn-cart activity-completed"
        >
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Side;
