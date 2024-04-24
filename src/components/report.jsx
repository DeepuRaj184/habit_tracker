// Importing React and the useContext hook from 'react' package
import React, { useContext } from "react";

// Importing the Navbar component
import Navbar from "./pages/Navbar";

// Importing CSS file for styling
import "../../src/styles/Home.css";

// Importing Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the Calender component
import Calander from "./pages/calender";

// Defining the Report component
const Report = () => {
    // Rendering the Navbar and Calender components
    return (
        <>
            <Navbar />
            <Calander />
        </>
    );
}

// Exporting the Report component as the default export
export default Report;
