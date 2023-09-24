import React, { createContext, useState } from 'react';

const PlanContext = createContext();

const PlanProvider = ({ children }) => {
    const [state, setState] = useState({
      people: 1,
      days: 0,
      date: new Date(),
      meals: [],
      foods: ['Ingen mat behövs'],
    });
  
    return (
      <PlanContext.Provider value={{ state, setState }}>
        {children}
      </PlanContext.Provider>
    );
  };

export { PlanProvider, PlanContext };