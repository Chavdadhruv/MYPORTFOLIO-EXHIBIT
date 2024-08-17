import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project A', description: 'Description of Project A', imageUrl: 'path-to-project-a-image', githubLink: 'https://github.com/project-a' },
    { id: 2, title: 'Project B', description: 'Description of Project B', imageUrl: 'path-to-project-b-image', githubLink: 'https://github.com/project-b' },
    // Add more projects as needed
  ]);

  const correctPassword = 'DHRUV@4508chavda';
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [newProject, setNewProject] = useState({ title: '', description: '', imageUrl: '', githubLink: '' });

  const handlePasswordCheck = () => {
    if (inputPassword === correctPassword) {
      setIsAuthenticated(true);
      alert('Access granted!');
    } else {
      alert('Incorrect Password!');
    }
  };

  const addProject = () => {
    if (isAuthenticated) {
      if (newProject.title && newProject.description && newProject.imageUrl && newProject.githubLink) {
        const newProjectData = { id: Date.now(), ...newProject };
        setProjects([...projects, newProjectData]);
        setNewProject({ title: '', description: '', imageUrl: '', githubLink: '' });
      } else {
        alert('Please fill all fields!');
      }
    } else {
      alert('You need to authenticate first!');
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProject({ ...editingProject, [name]: value });
  };

  const handleEditProject = (id) => {
    if (isAuthenticated && editingProject) {
      const updatedProjects = projects.map((project) =>
        project.id === id ? { ...project, ...editingProject } : project
      );
      setProjects(updatedProjects);
      setEditingProject(null);
    } else {
      alert('You need to authenticate first!');
    }
  };

  const deleteProject = (id) => {
    if (isAuthenticated) {
      const filteredProjects = projects.filter((project) => project.id !== id);
      setProjects(filteredProjects);
    } else {
      alert('You need to authenticate first!');
    }
  };

  return (
    <div className="projects-container">
        <div className="container1">
        <div className="container">

      <h1 className="projects-title">Projects</h1>

      <div className="password-section">
        <input
          type="password"
          placeholder="Enter Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button onClick={handlePasswordCheck}>Submit</button>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="code-link">
              View Code
            </a>
            <div className="project-actions">
              <button onClick={() => setEditingProject(project)}>Edit</button>
              <button onClick={() => deleteProject(project.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
</div>
      <div className="form-container">
      <div className="container">

        <h2>{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
        <input
          type="text"
          placeholder="Project title"
          name="title"
          value={editingProject ? editingProject.title : newProject.title}
          onChange={editingProject ? handleEditChange : (e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <textarea
          placeholder="Project description"
          name="description"
          value={editingProject ? editingProject.description : newProject.description}
          onChange={editingProject ? handleEditChange : (e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="imageUrl"
          value={editingProject ? editingProject.imageUrl : newProject.imageUrl}
          onChange={editingProject ? handleEditChange : (e) => setNewProject({ ...newProject, imageUrl: e.target.value })}
        />
        <input
          type="text"
          placeholder="GitHub Link"
          name="githubLink"
          value={editingProject ? editingProject.githubLink : newProject.githubLink}
          onChange={editingProject ? handleEditChange : (e) => setNewProject({ ...newProject, githubLink: e.target.value })}
        />
        <button onClick={editingProject ? () => handleEditProject(editingProject.id) : addProject}>
          {editingProject ? 'Save Changes' : 'Add Project'}
        </button>
        {editingProject && <button onClick={() => setEditingProject(null)}>Cancel</button>}
      </div>
</div>
      <div className="projects-footer">
        <img src="path-to-footer-image" alt="Footer" className="footer-image" />
      </div>
    </div>
    </div>
  );
};

export default Projects;
