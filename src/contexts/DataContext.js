import React, { createContext, useContext } from 'react';
import { projects } from '../data/projects';
import { awards } from '../data/awards';
import { skills } from '../data/skills';
import { experience } from '../data/experience';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  // Static data - to update, modify the files in src/data/
  const value = {
    projects,
    awards,
    skills,
    experience,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
