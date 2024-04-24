// Importing React, useState, useRef, useEffect, and useContext from 'react' package
import React, { useState, useRef, useEffect, useContext } from "react";

// Importing CSS files for styling
import "../../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing Modal and Button components from react-bootstrap
import { Modal, Button } from "react-bootstrap";

// Importing Link component from react-router-dom
import { Link } from "react-router-dom";

// Importing habitContext from the context file
import { habitContext } from "../../context";

// Defining the Hero component
const Hero = () => {
  // Destructuring values from the habitContext
  const { habits, habitClick, habitDelete, collecthabit, count } = useContext(
    habitContext
  );

  // State variable to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to close the modal
  const handleClose = () => setShowModal(false);

  // Function to open the modal
  const handleShow = () => setShowModal(true);

  // Ref to capture input value
  const input = useRef();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newHabit = input.current.value.trim();
    if (!newHabit) return;

    // Adding new habit to the list
    habitClick([...habits, newHabit]);
    input.current.value = "";

    // Closing the modal
    handleClose();
  };

  // Rendering the Hero component
  return (
    <>
      <div className={`hero-area ${showModal ? "blur-background" : ""}`}>
        {/* Content area */}
        <div className="container">
          <h2>
            Track your habits effortlessly with our intuitive habit tracker
            app. <br />
            Stay organized and motivated on your journey to personal growth.
          </h2>
        </div>

        {/* Habit addition area */}
        <div className="container habit-add">
          <p> Easily add new habits with a single click </p>
          <i
            className="fa-solid fa-arrow-right-long"
            style={{ backgroundColor: "white" }}
          ></i>
          <button onClick={handleShow} style={{ marginTop: -15 }}>
            Add Your Habit
          </button>
        </div>

        {/* Modal for adding new habit */}
        <Modal show={showModal} onHide={handleClose}>
          <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Add Your Habit Here</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                placeholder="Enter Your habit"
                ref={input}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" type="submit">
                Add
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </form>
        </Modal>

        <hr />

        {/* Habit display area */}
        <div className="container">
          {habits.map((item, i) => (
            <div className="row pt-3  habit-box mb-3" key={i}>
              <div className="col-lg-4 d-flex">
                <div
                  className="points"
                  style={{ marginLeft: 10, marginTop: 5 }}
                ></div>
                <p style={{ marginLeft: 30 }}>{item}</p>
              </div>
              <div className="col-lg-4 text-center">
              </div>
              <div className="col-lg-4 text-center">
                {/* Link to weekly report */}
                <Link to="/report">
                  <button
                    className="report-btn"
                    onClick={() => collecthabit(i)}
                  >
                    View Weekly Report
                  </button>
                </Link>

                {/* Button to delete habit */}
                <button
                  className="delete-btn"
                  onClick={() => habitDelete(i)}
                  style={{ marginLeft: 15 }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Exporting the Hero component as the default export
export default Hero;
