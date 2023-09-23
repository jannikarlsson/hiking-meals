import React, { createContext, useState } from 'react';

const PlanContext = createContext();

const PlanProvider = ({ children }) => {
  const [days, setDays] = useState(0);
  const [date, setDate] = useState(new Date());
  const [meals, setMeals] = useState([]);
  const [foods, setFoods] = useState(['Ingen mat behövs']);

  return (
    <PlanContext.Provider value={{ days, setDays, date, setDate, meals, setMeals, foods, setFoods }}>
      {children}
    </PlanContext.Provider>
  );
};

export { PlanProvider, PlanContext };