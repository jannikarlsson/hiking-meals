import React, { createContext, useState } from 'react';
import TEXTS from '../texts';

const PlanContext = createContext();

const PlanProvider = ({ children }) => {

    const defaultLanguage = 'sv'

    const [state, setState] = useState({
      people: 1,
      days: 0,
      date: new Date(),
      meals: [],
      language: defaultLanguage,
      foods: [TEXTS[defaultLanguage].noMeal],
    });
  
    return (
      <PlanContext.Provider value={{ state, setState }}>
        {children}
      </PlanContext.Provider>
    );
  };

export { PlanProvider, PlanContext };