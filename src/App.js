// Importing the CSS file for styling
import './App.css';

// Importing the Home and Report components from their respective files
import Home from './components/home';
import Report from './components/report';

// Importing BrowserRouter, Route, and Routes components from react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// App component function definition
function App() {
  // Rendering the BrowserRouter component to enable routing
  return (
    <BrowserRouter>
      {/* Defining routes for different paths */}
      <Routes>
        {/* Route for the home page */}
        <Route path='/' index element={<Home />} />
        {/* Route for the report page */}
        <Route path='report' element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exporting the App component as the default export
export default App;
