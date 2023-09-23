import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Plan from './components/Plan';

function App() {
  const [meals, setMeals] = useState([]);
  const [foods, setFoods] = useState(['Ingen mat behövs']);
  const [days, setDays] = useState(0);
  const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <Form changeMeals={setMeals} meals={meals} changeFoods={setFoods} foods={foods} changeDays={setDays} days={days} changeDate={setDate} date={date} />
      <Plan meals={meals} days={days} date={date} foods={foods} />
    </div>
  );
}

export default App;
