// // // // // import React from 'react';
// // // // // import './Skills.css'; // Ensure this path matches your folder structure

// // // // // const skills = [
// // // // //   {
// // // // //     id: 1,
// // // // //     title: 'React',
// // // // //     imageUrl: 'https://example.com/react-logo.png',
// // // // //     points: ['Component-based architecture', 'State management', 'Hooks', 'Virtual DOM', 'Routing']
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     title: 'JavaScript',
// // // // //     imageUrl: 'https://example.com/javascript-logo.png',
// // // // //     points: ['ES6+ features', 'Async programming', 'DOM manipulation', 'Event handling', 'JSON handling']
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     title: 'CSS',
// // // // //     imageUrl: 'https://example.com/css-logo.png',
// // // // //     points: ['Flexbox', 'Grid', 'Responsive design', 'Animations', 'Preprocessors (Sass)']
// // // // //   },
// // // // //   {
// // // // //     id: 4,
// // // // //     title: 'Python',
// // // // //     imageUrl: 'https://example.com/python-logo.png',
// // // // //     points: ['Data analysis', 'Web scraping', 'Machine learning', 'Django', 'Flask']
// // // // //   },
// // // // //   {
// // // // //     id: 5,
// // // // //     title: 'SQL',
// // // // //     imageUrl: 'https://example.com/sql-logo.png',
// // // // //     points: ['Data querying', 'Database management', 'Joins', 'Transactions', 'Stored procedures']
// // // // //   },
// // // // // ];

// // // // // const Skills = () => {
// // // // //   return (
// // // // //     <div className="skills-container">
// // // // //       <h1 className="skills-heading">My Skills</h1>
// // // // //       <div className="skills-grid">
// // // // //         {skills.map(skill => (
// // // // //           <div className="skill-card" key={skill.id}>
// // // // //             <img
// // // // //               src={skill.imageUrl}
// // // // //               alt={skill.title}
// // // // //               className="skill-image"
// // // // //             />
// // // // //             <h2 className="skill-title">{skill.title}</h2>
// // // // //             <ul className="skill-points">
// // // // //               {skill.points.map((point, index) => (
// // // // //                 <li key={index}>{point}</li>
// // // // //               ))}
// // // // //             </ul>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Skills;import React, { useState, useEffect } from 'react';
// // // // import React, { useState } from 'react';
// // // // import './Skills.css';

// // // // const Skills = () => {
// // // //   const [skills, setSkills] = useState([
// // // //     { id: 1, title: 'JavaScript', description: ['ES6+', 'React', 'Node.js'], imageUrl: 'path-to-js-image' },
// // // //     { id: 2, title: 'Python', description: ['Pandas', 'NumPy', 'Django'], imageUrl: 'path-to-python-image' },
// // // //     { id: 3, title: 'HTML/CSS', description: ['Responsive Design', 'Flexbox', 'Grid'], imageUrl: 'path-to-html-css-image' },
// // // //     { id: 4, title: 'Git', description: ['Version Control', 'GitHub', 'GitLab'], imageUrl: 'path-to-git-image' },
// // // //     { id: 5, title: 'SQL', description: ['Database Design', 'MySQL', 'PostgreSQL'], imageUrl: 'path-to-sql-image' },
// // // //   ]);

// // // //   const [newSkill, setNewSkill] = useState({ title: '', description: '', imageUrl: '' });
// // // //   const [editingSkill, setEditingSkill] = useState(null);
// // // //   const [showAddForm, setShowAddForm] = useState(false);
// // // //   const [password, setPassword] = useState('');
// // // //   const correctPassword = 'YourSecretPassword'; // Define your password here

// // // //   const handleAddSkill = () => {
// // // //     if (password === correctPassword) {
// // // //       const newSkillsList = [...skills, { ...newSkill, id: Date.now(), description: newSkill.description.split(', ') }];
// // // //       setSkills(newSkillsList);
// // // //       setNewSkill({ title: '', description: '', imageUrl: '' });
// // // //       setShowAddForm(false);
// // // //     } else {
// // // //       alert('Incorrect Password!');
// // // //     }
// // // //   };

// // // //   const handleEditSkill = (id) => {
// // // //     const updatedSkills = skills.map(skill => (skill.id === id ? editingSkill : skill));
// // // //     setSkills(updatedSkills);
// // // //     setEditingSkill(null);
// // // //   };

// // // //   const handleDeleteSkill = (id) => {
// // // //     setSkills(skills.filter(skill => skill.id !== id));
// // // //   };

// // // //   return (
// // // //     <div className="skills-container">
// // // //       <h1 className="skills-title">My Skills</h1>
      
// // // //       <div className="skills-grid">
// // // //         {skills.map(skill => (
// // // //           <div className="skill-card" key={skill.id}>
// // // //             <img src={skill.imageUrl} alt={skill.title} className="skill-image" />
// // // //             <h2 className="skill-title">{skill.title}</h2>
// // // //             <ul className="skill-description">
// // // //               {skill.description.map((desc, index) => (
// // // //                 <li key={index}>{desc}</li>
// // // //               ))}
// // // //             </ul>
// // // //             <div className="skill-actions">
// // // //               <button onClick={() => setEditingSkill(skill)}>Edit</button>
// // // //               <button onClick={() => handleDeleteSkill(skill.id)}>Delete</button>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       <div className="add-skill-container">
// // // //         <h2>Add New Skill</h2>
// // // //         {!showAddForm && (
// // // //           <div>
// // // //             <input
// // // //               type="password"
// // // //               placeholder="Enter password to add skill"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //             />
// // // //             <button onClick={() => setShowAddForm(true)}>Verify Password</button>
// // // //           </div>
// // // //         )}
        
// // // //         {showAddForm && (
// // // //           <div>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Skill title"
// // // //               value={newSkill.title}
// // // //               onChange={(e) => setNewSkill({ ...newSkill, title: e.target.value })}
// // // //             />
// // // //             <textarea
// // // //               placeholder="Skill description (comma separated)"
// // // //               value={newSkill.description}
// // // //               onChange={(e) => setNewSkill({ ...newSkill, description: e.target.value })}
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Image URL"
// // // //               value={newSkill.imageUrl}
// // // //               onChange={(e) => setNewSkill({ ...newSkill, imageUrl: e.target.value })}
// // // //             />
// // // //             <button onClick={handleAddSkill}>Add Skill</button>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {editingSkill && (
// // // //         <div className="edit-skill-container">
// // // //           <h2>Edit Skill</h2>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Skill title"
// // // //             value={editingSkill.title}
// // // //             onChange={(e) => setEditingSkill({ ...editingSkill, title: e.target.value })}
// // // //           />
// // // //           <textarea
// // // //             placeholder="Skill description (comma separated)"
// // // //             value={editingSkill.description.join(', ')}
// // // //             onChange={(e) => setEditingSkill({ ...editingSkill, description: e.target.value.split(', ') })}
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Image URL"
// // // //             value={editingSkill.imageUrl}
// // // //             onChange={(e) => setEditingSkill({ ...editingSkill, imageUrl: e.target.value })}
// // // //           />
// // // //           <button onClick={() => handleEditSkill(editingSkill.id)}>Save Changes</button>
// // // //           <button onClick={() => setEditingSkill(null)}>Cancel</button>
// // // //         </div>
// // // //       )}
      
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Skills;
// // import React, { useState } from 'react';
// // import './Skills.css';

// // const Skills = () => {
// //   const [skills, setSkills] = useState([
// //     { id: 1, title: 'JavaScript', description: ['ES6+', 'React', 'Node.js'], imageUrl: 'path-to-js-image' },
// //     { id: 2, title: 'Python', description: ['Pandas', 'NumPy', 'Django'], imageUrl: 'path-to-python-image' },
// //     { id: 3, title: 'HTML/CSS', description: ['Responsive Design', 'Flexbox', 'Grid'], imageUrl: 'path-to-html-css-image' },
// //     { id: 4, title: 'Git', description: ['Version Control', 'GitHub', 'GitLab'], imageUrl: 'path-to-git-image' },
// //     { id: 5, title: 'SQL', description: ['Database Management', 'MySQL', 'PostgreSQL'], imageUrl: 'path-to-sql-image' },
// //   ]);

// //   const correctPassword = 'DHRUV@4508chavda';
// //   const [inputPassword, setInputPassword] = useState('');
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   const handlePasswordCheck = () => {
// //     if (inputPassword === correctPassword) {
// //       setIsAuthenticated(true);
// //       alert('Access granted!');
// //     } else {
// //       alert('Incorrect Password!');
// //     }
// //   };

// //   const addSkill = () => {
// //     if (isAuthenticated) {
// //       const newSkill = { id: Date.now(), title: 'New Skill', description: ['Point 1', 'Point 2'], imageUrl: 'path-to-image' };
// //       setSkills([...skills, newSkill]);
// //     } else {
// //       alert('You need to authenticate first!');
// //     }
// //   };

// //   const editSkill = (id) => {
// //     if (isAuthenticated) {
// //       const updatedSkills = skills.map((skill) =>
// //         skill.id === id ? { ...skill, title: 'Updated Skill', description: ['Updated Point 1', 'Updated Point 2'] } : skill
// //       );
// //       setSkills(updatedSkills);
// //     } else {
// //       alert('You need to authenticate first!');
// //     }
// //   };

// //   const deleteSkill = (id) => {
// //     if (isAuthenticated) {
// //       const filteredSkills = skills.filter((skill) => skill.id !== id);
// //       setSkills(filteredSkills);
// //     } else {
// //       alert('You need to authenticate first!');
// //     }
// //   };

// //   return (
// //     <div className="skills-container">
// //       <h1 className="skills-title">SKILLS</h1>
// //       <div className="password-section">
// //         <input
// //           type="password"
// //           placeholder="Enter Password"
// //           value={inputPassword}
// //           onChange={(e) => setInputPassword(e.target.value)}
// //         />
// //         <button onClick={handlePasswordCheck}>Submit</button>
// //       </div>

// //       <div className="skills-grid">
// //         {skills.map((skill) => (
// //           <div key={skill.id} className="skill-card">
// //             <img src={skill.imageUrl} alt={skill.title} className="skill-image" />
// //             <h2>{skill.title}</h2>
// //             <ul>
// //               {skill.description.map((point, index) => (
// //                 <li key={index}>{point}</li>
// //               ))}
// //             </ul>
// //             <div className="skill-actions">
// //               <button onClick={() => editSkill(skill.id)}>Edit</button>
// //               <button onClick={() => deleteSkill(skill.id)}>Delete</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="add-skill-section">
// //         <button onClick={addSkill}>Add Skill</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Skills;

// import React, { useState } from 'react';
// import './Skills.css';

// const Skills = () => {
//   const [skills, setSkills] = useState([
//     { id: 1, title: 'JavaScript', description: ['ES6+', 'React', 'Node.js'], imageUrl: 'path-to-js-image' },
//     { id: 2, title: 'Python', description: ['Pandas', 'NumPy', 'Django'], imageUrl: 'path-to-python-image' },
//     { id: 3, title: 'HTML/CSS', description: ['Responsive Design', 'Flexbox', 'Grid'], imageUrl: 'path-to-html-css-image' },
//     { id: 4, title: 'Git', description: ['Version Control', 'GitHub', 'GitLab'], imageUrl: 'path-to-git-image' },
//     { id: 5, title: 'SQL', description: ['Database Management', 'MySQL', 'PostgreSQL'], imageUrl: 'path-to-sql-image' },
//   ]);

//   const correctPassword = 'DHRUV@4508chavda';
//   const [inputPassword, setInputPassword] = useState('');
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [editingSkill, setEditingSkill] = useState(null);
//   const [newSkill, setNewSkill] = useState({ title: '', description: '', imageUrl: '' });

//   const handlePasswordCheck = () => {
//     if (inputPassword === correctPassword) {
//       setIsAuthenticated(true);
//       alert('Access granted!');
//     } else {
//       alert('Incorrect Password!');
//     }
//   };

//   const addSkill = () => {
//     if (isAuthenticated) {
//       if (newSkill.title && newSkill.description && newSkill.imageUrl) {
//         const newSkillData = {
//           id: Date.now(),
//           ...newSkill,
//           description: newSkill.description.split(', ')
//         };
//         setSkills([...skills, newSkillData]);
//         setNewSkill({ title: '', description: '', imageUrl: '' });
//       } else {
//         alert('Please fill all fields!');
//       }
//     } else {
//       alert('You need to authenticate first!');
//     }
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditingSkill({ ...editingSkill, [name]: value });
//   };

//   const handleEditSkill = (id) => {
//     if (isAuthenticated && editingSkill) {
//       const updatedSkills = skills.map((skill) =>
//         skill.id === id ? { ...skill, ...editingSkill } : skill
//       );
//       setSkills(updatedSkills);
//       setEditingSkill(null);
//     } else {
//       alert('You need to authenticate first!');
//     }
//   };

//   const deleteSkill = (id) => {
//     if (isAuthenticated) {
//       const filteredSkills = skills.filter((skill) => skill.id !== id);
//       setSkills(filteredSkills);
//     } else {
//       alert('You need to authenticate first!');
//     }
//   };

//   return (
//     <div className="skills-container">
//       <h1 className="skills-title">SKILLS</h1>
//       <div className="password-section">
//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={inputPassword}
//           onChange={(e) => setInputPassword(e.target.value)}
//         />
//         <button onClick={handlePasswordCheck}>Submit</button>
//       </div>

//       <div className="skills-grid">
//         {skills.map((skill) => (
//           <div key={skill.id} className="skill-card">
//             <img src={skill.imageUrl} alt={skill.title} className="skill-image" />
//             <h2>{skill.title}</h2>
//             <ul>
//               {skill.description.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//             <div className="skill-actions">
//               <button onClick={() => setEditingSkill(skill)}>Edit</button>
//               <button onClick={() => deleteSkill(skill.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="add-skill-section">
//         <h2>Add New Skill</h2>
//         <input
//           type="text"
//           placeholder="Skill title"
//           value={newSkill.title}
//           onChange={(e) => setNewSkill({ ...newSkill, title: e.target.value })}
//         />
//         <textarea
//           placeholder="Skill description (comma separated)"
//           value={newSkill.description}
//           onChange={(e) => setNewSkill({ ...newSkill, description: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={newSkill.imageUrl}
//           onChange={(e) => setNewSkill({ ...newSkill, imageUrl: e.target.value })}
//         />
//         <button onClick={addSkill}>Add Skill</button>
//       </div>

//       {editingSkill && (
//         <div className="edit-skill-container">
//           <h2>Edit Skill</h2>
//           <input
//             type="text"
//             name="title"
//             placeholder="Skill title"
//             value={editingSkill.title}
//             onChange={handleEditChange}
//           />
//           <textarea
//             name="description"
//             placeholder="Skill description (comma separated)"
//             value={editingSkill.description ? editingSkill.description.join(', ') : ''}
//             onChange={handleEditChange}
//           />
//           <input
//             type="text"
//             name="imageUrl"
//             placeholder="Image URL"
//             value={editingSkill.imageUrl}
//             onChange={handleEditChange}
//           />
//           <button onClick={() => handleEditSkill(editingSkill.id)}>Save Changes</button>
//           <button onClick={() => setEditingSkill(null)}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Skills;
import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([
    { id: 1, title: 'JavaScript', description: ['ES6+', 'React', 'Node.js'], imageUrl: 'path-to-js-image' },
    { id: 2, title: 'Python', description: ['Pandas', 'NumPy', 'Django'], imageUrl: 'path-to-python-image' },
    { id: 3, title: 'HTML/CSS', description: ['Responsive Design', 'Flexbox', 'Grid'], imageUrl: 'path-to-html-css-image' },
    { id: 4, title: 'Git', description: ['Version Control', 'GitHub', 'GitLab'], imageUrl: 'path-to-git-image' },
    { id: 5, title: 'SQL', description: ['Database Management', 'MySQL', 'PostgreSQL'], imageUrl: 'path-to-sql-image' },
  ]);

  const correctPassword = 'DHRUV@4508chavda';
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [newSkill, setNewSkill] = useState({ title: '', description: '', imageUrl: '' });

  const handlePasswordCheck = () => {
    if (inputPassword === correctPassword) {
      setIsAuthenticated(true);
      alert('Access granted!');
    } else {
      alert('Incorrect Password!');
    }
  };

  const addSkill = () => {
    if (isAuthenticated) {
      if (newSkill.title && newSkill.description && newSkill.imageUrl) {
        const newSkillData = {
          id: Date.now(),
          ...newSkill,
          description: newSkill.description.split(', ')
        };
        setSkills([...skills, newSkillData]);
        setNewSkill({ title: '', description: '', imageUrl: '' });
      } else {
        alert('Please fill all fields!');
      }
    } else {
      alert('You need to authenticate first!');
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingSkill({ ...editingSkill, [name]: value });
  };

  const handleEditSkill = (id) => {
    if (isAuthenticated && editingSkill) {
      const updatedSkills = skills.map((skill) =>
        skill.id === id ? { ...skill, ...editingSkill } : skill
      );
      setSkills(updatedSkills);
      setEditingSkill(null);
    } else {
      alert('You need to authenticate first!');
    }
  };

  const deleteSkill = (id) => {
    if (isAuthenticated) {
      const filteredSkills = skills.filter((skill) => skill.id !== id);
      setSkills(filteredSkills);
    } else {
      alert('You need to authenticate first!');
    }
  };

  return (
    <div className="skills-container">
       <div className='container1'>
      <h1 className="skills-title">Skills</h1>
      <div className='container'>

      <div className="password-section">
        <input
          type="password"
          placeholder="Enter Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button onClick={handlePasswordCheck}>Submit</button>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <img src={skill.imageUrl} alt={skill.title} className="skill-image" />
            <h2>{skill.title}</h2>
            <ul>
              {skill.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="skill-actions">
              <button onClick={() => setEditingSkill(skill)}>Edit</button>
              <button onClick={() => deleteSkill(skill.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>         

      </div>

      <div className="form-container">
      <div className="container">

        <h2>{editingSkill ? 'Edit Skill' : 'Add New Skill'}</h2>
        <input
          type="text"
          placeholder="Skill title"
          name="title"
          value={editingSkill ? editingSkill.title : newSkill.title}
          onChange={editingSkill ? handleEditChange : (e) => setNewSkill({ ...newSkill, title: e.target.value })}
        />
        <textarea
          placeholder="Skill description (comma separated)"
          name="description"
          value={editingSkill ? (editingSkill.description || []).join(', ') : newSkill.description}
          onChange={editingSkill ? handleEditChange : (e) => setNewSkill({ ...newSkill, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="imageUrl"
          value={editingSkill ? editingSkill.imageUrl : newSkill.imageUrl}
          onChange={editingSkill ? handleEditChange : (e) => setNewSkill({ ...newSkill, imageUrl: e.target.value })}
        />
        <button onClick={editingSkill ? () => handleEditSkill(editingSkill.id) : addSkill}>
          {editingSkill ? 'Save Changes' : 'Add Skill'}
        </button>
        {editingSkill && <button onClick={() => setEditingSkill(null)}>Cancel</button>}
      </div>
      </div>
      <div className="skills-footer">
        <img src="path-to-footer-image" alt="Footer" className="footer-image" />
      </div>
    </div>      </div>

  );
};

export default Skills;
