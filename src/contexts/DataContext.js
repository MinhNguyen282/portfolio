import React, { createContext, useContext, useState, useEffect } from 'react';
import { projects as initialProjects } from '../data/projects';
import { awards as initialAwards } from '../data/awards';

// Initial skills and experience data
const initialSkills = [
  {
    category: 'Languages',
    skills: ['Java', 'C++', 'Python', 'JavaScript', 'PHP', 'Go'],
  },
  {
    category: 'Frameworks',
    skills: ['Node.js', 'React.js', 'Express.js', 'Spring'],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    category: 'DevOps',
    skills: ['Git', 'GitHub Actions', 'CI/CD', 'Docker'],
  },
  {
    category: 'Message Brokers',
    skills: ['RabbitMQ'],
  },
];

const initialExperience = [
  {
    id: 1,
    jobTitle: 'Game Back-end Developer',
    company: 'GihOt Studio',
    duration: 'Jun-16-2025 to Aug-8-2025',
    description: 'Designed and implemented the entire game–server stack for a real-time multiplayer title that blends MOBA, RTS and minion-control mechanics.',
    details: [
      'Built RESTful micro-services with Java 17 / Spring Boot for user authentication, matchmaking and room/lobby management; persisted player and game data in MongoDB.',
      'Developed a low-latency Netty-powered WebSocket gateway; created a custom TLV (type-length-value) binary protocol to stream gameplay events between client and server.',
      'Optimized thread-pool usage, I/O pipelines, message serialization and message sending mechanics.'
    ]
  },
];

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  // Load data from localStorage or use initial data
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('portfolio_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [awards, setAwards] = useState(() => {
    const saved = localStorage.getItem('portfolio_awards');
    return saved ? JSON.parse(saved) : initialAwards;
  });

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('portfolio_skills');
    return saved ? JSON.parse(saved) : initialSkills;
  });

  const [experience, setExperience] = useState(() => {
    const saved = localStorage.getItem('portfolio_experience');
    return saved ? JSON.parse(saved) : initialExperience;
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('portfolio_awards', JSON.stringify(awards));
  }, [awards]);

  useEffect(() => {
    localStorage.setItem('portfolio_skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('portfolio_experience', JSON.stringify(experience));
  }, [experience]);

  // Project management functions
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(), // Simple ID generation
    };
    setProjects(prev => [...prev, newProject]);
  };

  const updateProject = (id, updatedProject) => {
    setProjects(prev => prev.map(project => 
      project.id === id ? { ...project, ...updatedProject } : project
    ));
  };

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  // Award management functions
  const addAward = (award) => {
    const newAward = {
      ...award,
      id: Date.now(),
    };
    setAwards(prev => [...prev, newAward]);
  };

  const updateAward = (id, updatedAward) => {
    setAwards(prev => prev.map(award => 
      award.id === id ? { ...award, ...updatedAward } : award
    ));
  };

  const deleteAward = (id) => {
    setAwards(prev => prev.filter(award => award.id !== id));
  };

  // Skills management functions
  const updateSkills = (newSkills) => {
    setSkills(newSkills);
  };

  const addSkillCategory = (category) => {
    setSkills(prev => [...prev, { category: category.category, skills: category.skills || [] }]);
  };

  const updateSkillCategory = (index, updatedCategory) => {
    setSkills(prev => prev.map((cat, idx) => 
      idx === index ? updatedCategory : cat
    ));
  };

  const deleteSkillCategory = (index) => {
    setSkills(prev => prev.filter((_, idx) => idx !== index));
  };

  // Experience management functions
  const addExperience = (exp) => {
    const newExp = {
      ...exp,
      id: Date.now(),
    };
    setExperience(prev => [...prev, newExp]);
  };

  const updateExperience = (id, updatedExp) => {
    setExperience(prev => prev.map(exp => 
      exp.id === id ? { ...exp, ...updatedExp } : exp
    ));
  };

  const deleteExperience = (id) => {
    setExperience(prev => prev.filter(exp => exp.id !== id));
  };

  // Reset functions
  const resetProjects = () => {
    setProjects(initialProjects);
    localStorage.removeItem('portfolio_projects');
  };

  const resetAwards = () => {
    setAwards(initialAwards);
    localStorage.removeItem('portfolio_awards');
  };

  const resetSkills = () => {
    setSkills(initialSkills);
    localStorage.removeItem('portfolio_skills');
  };

  const resetExperience = () => {
    setExperience(initialExperience);
    localStorage.removeItem('portfolio_experience');
  };

  const value = {
    // Data
    projects,
    awards,
    skills,
    experience,
    
    // Project functions
    addProject,
    updateProject,
    deleteProject,
    
    // Award functions
    addAward,
    updateAward,
    deleteAward,
    
    // Skills functions
    updateSkills,
    addSkillCategory,
    updateSkillCategory,
    deleteSkillCategory,
    
    // Experience functions
    addExperience,
    updateExperience,
    deleteExperience,
    
    // Reset functions
    resetProjects,
    resetAwards,
    resetSkills,
    resetExperience,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
