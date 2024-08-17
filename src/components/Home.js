// import React, { useState } from 'react';
// import logo from '../components/logo.png';
// import './Home.css';

// function Home() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5001/api/forms', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Form submitted successfully');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         alert('Failed to submit the form');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="home">
//       <div className='container1'>
//         <div className='container'>
//           <div className="home-content">
//             <img src={logo} alt="About Me" className="home-image" />
//             <div className="home-text">
//               <h1>Welcome to My Portfolio</h1>
//               <h3>Data Scientist</h3>
//               <h6>
//                 I am passionate about using data to solve real-world problems and uncover insights.
//                 With experience in machine learning, data analysis, and more, I am excited to share my work with you.
//               </h6>
//             </div>
//           </div>
//         </div>
//         <br />
//         <div className="contact-form-container">
//           <div className='container'>
//             <h2>Contact Me</h2>
//             <form onSubmit={handleSubmit}  method="POST" action="http://localhost:5001/api/forms ">
//               <label htmlFor="name">Name:</label>
//               <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

//               <label htmlFor="email">Email:</label>
//               <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

//               <label htmlFor="message">Message:</label>
//               <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

//               <button type="submit">Send Message</button>
//             </form>
//           </div>
//         </div>
//         <footer className="footer">
//           <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
//           <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//           <a href="mailto:dhruvchavda447@gmail.com">Gmail</a>
//           <a href="https://www.hackerrank.com/yourprofile" target="_blank" rel="noopener noreferrer">HackerRank</a>
//           <a href="https://www.kaggle.com/yourprofile" target="_blank" rel="noopener noreferrer">Kaggle</a>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import logo from '../components/logo.png'; // Adjust the path as needed
import './Home.css'; // Ensure this path is correct

function Home() {
  
  return (
    <div className="home">
      <div className='container1'>
        <div className='container'>
          <div className="home-content">
            <img src={logo} alt="About Me" className="home-image" />
            <div className="home-text">
              <h1>Welcome to My Portfolio</h1>
              <h3>Data Scientist</h3>
              <h6>
                I am passionate about using data to solve real-world problems and uncover insights.
                With experience in machine learning, data analysis, and more, I am excited to share my work with you.
              </h6>
            </div>
          </div>
        </div>
        <br />
        <div className="contact-form-container">
          <div className='container'>
            <h2>Contact Me</h2>
            <form action="https://formspree.io/f/xovalpvq" method="POST">
            <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name"  />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email"  required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <footer className="footer">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:dhruvchavda447@gmail.com">Gmail</a>
          <a href="https://www.hackerrank.com/yourprofile" target="_blank" rel="noopener noreferrer">HackerRank</a>
          <a href="https://www.kaggle.com/yourprofile" target="_blank" rel="noopener noreferrer">Kaggle</a>
        </footer>
      </div>
    </div>
  );
}

export default Home;