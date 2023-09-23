import { useState, useContext } from 'react';
import './App.css';
import Form from './components/Form';
import Plan from './components/Plan';
import { PlanContext, PlanProvider } from './contexts/PlanContext';

function App() {
  const [meals, setMeals] = useState([]);
  const [foods, setFoods] = useState(['Ingen mat behövs']);

  return (
    <PlanProvider>
      <div className="App">
        <Form changeMeals={setMeals} meals={meals} changeFoods={setFoods} foods={foods} />
        <Plan />
      </div>
    </PlanProvider>
  );
}

export default App;
