import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Use manual mock for react-router-dom
jest.mock('react-router-dom');

// Mock the components to avoid complex rendering during testing
jest.mock('./components/Hero', () => {
  return function MockHero() {
    return <div data-testid="hero-section">Hero Section</div>;
  };
});

jest.mock('./components/Projects', () => {
  return function MockProjects() {
    return <div data-testid="projects-section">Projects Section</div>;
  };
});

jest.mock('./components/Skills', () => {
  return function MockSkills() {
    return <div data-testid="skills-section">Skills Section</div>;
  };
});

jest.mock('./components/Awards', () => {
  return function MockAwards() {
    return <div data-testid="awards-section">Awards Section</div>;
  };
});

jest.mock('./components/Contact', () => {
  return function MockContact() {
    return <div data-testid="contact-section">Contact Section</div>;
  };
});

jest.mock('./components/ProjectDetails', () => {
  return function MockProjectDetails() {
    return <div data-testid="project-details-section">Project Details</div>;
  };
});

jest.mock('./components/CV', () => {
  return function MockCV() {
    return <div data-testid="cv-section">CV Section</div>;
  };
});

jest.mock('./components/Experience', () => {
  return function MockExperience() {
    return <div data-testid="experience-section">Experience Section</div>;
  };
});

test('renders app without crashing', () => {
  render(<App />);
  // Test that the app renders without throwing errors
  expect(document.body).toBeInTheDocument();
});

test('renders navigation', () => {
  render(<App />);
  // The navbar should be present
  const nav = screen.getByRole('navigation');
  expect(nav).toBeInTheDocument();
});
