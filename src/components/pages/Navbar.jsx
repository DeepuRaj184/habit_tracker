// Importing React from 'react' package
import React from "react";

// Importing CSS files for styling
import "../../styles/Home.css"; // Assuming this is the correct path to your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

// Defining the Navbar component
const Navbar = () => {
    // Rendering the Navbar
    return (
        <>
            {/* Navbar layout */}
            <div className="homebackground row">
                <div className="col-lg-3">
                    {/* Placeholder for an image */}
                    {/* <img src={habit} style={{backgroundColor:'white'}}/>  */}
                </div>
                {/* Title */}
                <h4 className="col-lg-9">Habit Tracker</h4>
                {/* Horizontal line */}
                <hr />
            </div>
        </>
    );
}

// Exporting the Navbar component as the default export
export default Navbar;
