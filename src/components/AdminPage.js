import React, { useState } from 'react';
import { FaSignOutAlt, FaPlus, FaEdit, FaTrash, FaProjectDiagram, FaTrophy, FaCog, FaBriefcase } from 'react-icons/fa';
import { useData } from '../contexts/DataContext';
import { useAuth } from '../contexts/AuthContext';
import { ProjectUpdateModal, AwardUpdateModal, SkillsUpdateModal, ExperienceUpdateModal } from './UpdateModals';

const AdminPage = () => {
  const {
    projects,
    addProject,
    updateProject,
    deleteProject,
    awards,
    addAward,
    updateAward,
    deleteAward,
    skills,
    addSkillCategory,
    updateSkillCategory,
    deleteSkillCategory,
    experience,
    addExperience,
    updateExperience,
    deleteExperience,
  } = useData();
  
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState('projects');
  
  // Modal states
  const [modals, setModals] = useState({
    project: { isOpen: false, data: null },
    award: { isOpen: false, data: null },
    skill: { isOpen: false, data: null, index: null },
    experience: { isOpen: false, data: null }
  });
  
  // Modal handlers
  const openModal = (type, data, index = null) => {
    setModals(prev => ({
      ...prev,
      [type]: { isOpen: true, data, index }
    }));
  };
  
  const closeModal = (type) => {
    setModals(prev => ({
      ...prev,
      [type]: { isOpen: false, data: null, index: null }
    }));
  };

  // Example functions to handle adding or updating content
  const handleAddProject = () => {
    const newProject = {
      title: 'New Project',
      description: 'Description here',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Node.js'],
      demo: '',
      code: '',
    };
    addProject(newProject);
  };

  const handleAddAward = () => {
    const newAward = {
      title: 'New Award',
      organization: 'Organization Name',
      year: new Date().getFullYear().toString(),
      description: 'Award description here',
    };
    addAward(newAward);
  };

  const handleAddExperience = () => {
    const newExp = {
      jobTitle: 'New Position',
      company: 'Company Name',
      duration: 'Start - End Date',
      description: 'Job description here',
      details: ['Detail 1', 'Detail 2'],
    };
    addExperience(newExp);
  };

  const tabs = [
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram, count: projects.length },
    { id: 'skills', label: 'Skills', icon: FaCog, count: skills.length },
    { id: 'experience', label: 'Experience', icon: FaBriefcase, count: experience.length },
    { id: 'awards', label: 'Awards', icon: FaTrophy, count: awards.length },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-primary-50 dark:from-dark-900 dark:to-dark-800 min-h-screen transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage your portfolio content</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white dark:bg-dark-800 p-2 rounded-lg shadow-lg">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                }`}
              >
                <IconComponent className="mr-2" />
                {tab.label}
                <span className="ml-2 px-2 py-1 text-xs bg-white/20 rounded-full">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow-xl p-6 transition-colors duration-300">
          
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Projects Management</h2>
                <button
                  onClick={handleAddProject}
                  className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300"
                >
                  <FaPlus className="mr-2" />
                  Add Project
                </button>
              </div>
              <div className="grid gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="border border-gray-200 dark:border-dark-600 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.technologies?.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => openModal('project', project)}
                          className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded transition-colors duration-300"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteProject(project.id)}
                          className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors duration-300"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {projects.length === 0 && (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-8">No projects yet. Add your first project!</p>
                )}
              </div>
            </div>
          )}

          {/* Awards Tab */}
          {activeTab === 'awards' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Awards Management</h2>
                <button
                  onClick={handleAddAward}
                  className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300"
                >
                  <FaPlus className="mr-2" />
                  Add Award
                </button>
              </div>
              <div className="grid gap-4">
                {awards.map((award) => (
                  <div key={award.id} className="border border-gray-200 dark:border-dark-600 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{award.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{award.organization} - {award.year}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{award.description}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => openModal('award', award)}
                          className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded transition-colors duration-300"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteAward(award.id)}
                          className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors duration-300"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {awards.length === 0 && (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-8">No awards yet. Add your first award!</p>
                )}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Skills Management</h2>
                <button
                  onClick={() => addSkillCategory({ category: 'New Category', skills: ['Skill 1', 'Skill 2'] })}
                  className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300"
                >
                  <FaPlus className="mr-2" />
                  Add Category
                </button>
              </div>
              <div className="grid gap-4">
                {skills.map((category, idx) => (
                  <div key={idx} className="border border-gray-200 dark:border-dark-600 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{category.category}</h3>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {category.skills.map((skill, skillIdx) => (
                            <span key={skillIdx} className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => openModal('skill', category, idx)}
                          className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded transition-colors duration-300"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteSkillCategory(idx)}
                          className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors duration-300"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {skills.length === 0 && (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-8">No skill categories yet. Add your first category!</p>
                )}
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience Management</h2>
                <button
                  onClick={handleAddExperience}
                  className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300"
                >
                  <FaPlus className="mr-2" />
                  Add Experience
                </button>
              </div>
              <div className="grid gap-4">
                {experience.map((exp) => (
                  <div key={exp.id} className="border border-gray-200 dark:border-dark-600 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{exp.jobTitle}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{exp.company} - {exp.duration}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{exp.description}</p>
                        <ul className="list-disc list-inside mt-2 text-sm text-gray-500 dark:text-gray-400">
                          {exp.details?.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => openModal('experience', exp)}
                          className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded transition-colors duration-300"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteExperience(exp.id)}
                          className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors duration-300"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {experience.length === 0 && (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-8">No experience entries yet. Add your first experience!</p>
                )}
              </div>
            </div>
          )}
          
        </div>
      </div>
      
      {/* Modals */}
      <ProjectUpdateModal
        isOpen={modals.project.isOpen}
        onClose={() => closeModal('project')}
        project={modals.project.data}
        onUpdate={updateProject}
      />
      
      <AwardUpdateModal
        isOpen={modals.award.isOpen}
        onClose={() => closeModal('award')}
        award={modals.award.data}
        onUpdate={updateAward}
      />
      
      <SkillsUpdateModal
        isOpen={modals.skill.isOpen}
        onClose={() => closeModal('skill')}
        skillCategory={modals.skill.data}
        index={modals.skill.index}
        onUpdate={updateSkillCategory}
      />
      
      <ExperienceUpdateModal
        isOpen={modals.experience.isOpen}
        onClose={() => closeModal('experience')}
        experience={modals.experience.data}
        onUpdate={updateExperience}
      />
    </section>
  );
};

export default AdminPage;

