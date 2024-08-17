// CV.js
import React, { useState } from 'react';
import './CV.css';

const CV = () => {
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newCvImage, setNewCvImage] = useState(null);
  const correctPassword = 'DHRUV@4508chavda';

  const handlePasswordCheck = () => {
    if (inputPassword === correctPassword) {
      setIsAuthenticated(true);
      alert('Access granted!');
    } else {
      alert('Incorrect Password!');
    }
  };

  const handleEditCv = () => {
    if (isAuthenticated) {
      document.getElementById('cv-file-input').click();
    } else {
      alert('You need to authenticate first!');
    }
  };

  const handleDeleteCv = () => {
    if (isAuthenticated) {
      // Logic to delete the CV (e.g., making an API call)
      alert('CV deleted!');
    } else {
      alert('You need to authenticate first!');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setNewCvImage(fileURL);
    }
  };

  const handleUploadCv = () => {
    if (newCvImage) {
      // Update the CV image or file here
      alert('CV updated!');
      setNewCvImage(null);
    }
  };

  return (
    <div className="cv-container">
        <div className="container1">

      <div className="cv-view">
        <iframe
          src="https://drive.google.com/file/d/1rfSN1bcoI0nsf_yXpVz2ELgBWZ-9x6e9/preview"
          title="CV"
          className="cv-pdf"
        ></iframe>
      </div>

      <div className="password-section">
        <input
          type="password"
          placeholder="Enter Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button onClick={handlePasswordCheck}>Submit</button>
      </div>

      <div className="cv-actions">
        {isAuthenticated && (
          <>
            <button onClick={handleEditCv} className="action-button">Edit CV</button>
            <button onClick={handleDeleteCv} className="action-button">Delete CV</button>
          </>
        )}
      </div>

      <div className="cv-download">
        <a
          href="https://drive.google.com/uc?id=1rfSN1bcoI0nsf_yXpVz2ELgBWZ-9x6e9&export=download"
          download
          className="download-button"
        >
          Download CV
        </a>
      </div>
      <div className="container">

      <input
        type="file"
        id="cv-file-input"
        style={{ display: 'none' }}
        accept="image/*,application/pdf"
        onChange={handleFileChange}
        onClick={(e) => e.stopPropagation()}
      />        </div>

      {newCvImage && (
        <div className="upload-preview">
          <img src={newCvImage} alt="Preview" className="upload-preview-image" />
          <button onClick={handleUploadCv} className="upload-button">Upload</button>
        </div>
      )}
    </div> 
</div>

  );
};

export default CV;
