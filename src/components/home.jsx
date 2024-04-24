// Importing React from 'react' package
import React from "react";

// Importing Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the Navbar component
import Navbar from "./pages/Navbar";

// Importing the Hero component
import Hero from "./pages/Hero";

// Importing CSS file for styling
import "../../src/styles/Home.css";

// Defining the Home component
const Home = () => {
    // Rendering the Navbar and Hero components
    return (
        <>
            <Navbar />
            <Hero />
        </>
    );
}

// Exporting the Home component as the default export
export default Home;
