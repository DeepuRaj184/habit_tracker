// Importing necessary modules and styles
import React, { useState } from "react";
import "../../styles/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { habitContext } from "../../context";
import { useContext } from "react";
import { prevAndNext3DaysWithDays } from "../../data/days";


const Calendar = () => {
    // Using context to get habitToCollect
    const { habitToCollect } = useContext(habitContext);

    // State variables for managing button clicks
    const [done, setDone] = useState({});
    const [notdone, setNotDone] = useState({});
    const [noAction, setNoAction] = useState({});

    // Function to handle 'Done' button click
    const handleDone = (i) => {
        if (i < 4) {
            setDone(prevState => ({ ...prevState, [i]: !prevState[i] }));
            setNotDone(prevState => ({ ...prevState, [i]: false }));
            setNoAction(prevState => ({ ...prevState, [i]: true }));
        } else {
            alert("Cannot do it for future days");
        }
    };
    
    // Function to handle 'Not Done' button click
    const handleNotDone = (i) => {
        if (i < 4) {
            setNotDone(prevState => ({ ...prevState, [i]: !prevState[i] }));
            setDone(prevState => ({ ...prevState, [i]: false }));
            setNoAction(prevState => ({ ...prevState, [i]: true }));
        } else {
            alert("Cannot do it for future days");
        }
    };
    
    // Function to handle 'No Action' button click
    const handleNoAction = (i) => {
        if (i < 4) {
            setNoAction(prevState => ({ ...prevState, [i]: !prevState[i] }));
            setDone(prevState => ({ ...prevState, [i]: false }));
            setNotDone(prevState => ({ ...prevState, [i]: false }));
        } else {
            alert("Cannot do it for future days");
        }
    };
    
    // Functions to check button states
    const isDone = (i) => done[i] || false;
    const isNotDone = (i) => notdone[i] || false;
    const isNoAction = (i) => noAction[i] || false;

    // Rendering the Calendar component
    return (
        <>
            <div className="container">
                <div className="text-center">
                    <h1 style={{ letterSpacing: 2 }}>{habitToCollect}</h1>
                    <small className="quotes">~"Consistency breeds excellence."</small>
                </div>
                <div className="row justify-content-center ">
                    {prevAndNext3DaysWithDays.map((item, i) =>
                        <div className={`col-lg-3 mt-20 mb-20 ${i === 3 ? 'fourth-div' : ""} calendar-box`} key={i}>
                            <div className="calender-date pt-2 pb-3  mt-3">
                                <div className="text-center">
                                    <h4>{item.day}</h4>
                                    <p>{item.date}</p>
                                </div>
                                <div className="d-flex justify-content-evenly calender-btns">
                                    {/* 'Done' button */}
                                    <button onClick={() => handleDone(i)} className={`${isDone(i) ? "btn-bgclr-done" : "btn-bgclr-setdone"}`} ><FontAwesomeIcon icon={faCheck} /></button>
                                    {/* 'Not Done' button */}
                                    <button onClick={() => handleNotDone(i)} className={`${isNotDone(i) ? "btn-bgclr-notdone" : "btn-bgclr-setnotdone"}`}><FontAwesomeIcon icon={faXmark} /></button>
                                    {/* 'No Action' button */}
                                    <button onClick={() => handleNoAction(i)} className={`${isNoAction(i) ? "btn-bgclr-third" : "btn-bgclr-third-default"}`}><FontAwesomeIcon icon={faMinus} /></button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="text-center">
                {/* Link to navigate back */}
                <Link to="/">
                    <button className="back-btn">
                        Back To View
                    </button>
                </Link> 
            </div>
        </>
    );
}

// Exporting the Calendar component as the default export
export default Calendar;
