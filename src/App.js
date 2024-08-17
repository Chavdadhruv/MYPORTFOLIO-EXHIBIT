// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Skills from './components/Skills'; // Import the Skills component

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/skills" element={<Skills />} /> {/* Add the route for Skills */}
//         {/* Add routes for other components/pages here */}
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CV from './components/CV'; // Import the CV component
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects'; // Import the Projects component
import Skills from './components/Skills'; // Import the Skills component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} /> {/* Route for Skills */}
        <Route path="/projects" element={<Projects />} /> {/* Route for Projects */}
        <Route path="/cv" element={<CV />} />

        {/* Add routes for other components/pages here */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
