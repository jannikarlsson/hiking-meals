import { useState, useContext } from "react";
import { PlanContext } from "../contexts/PlanContext";

function Meal({ index, handleSelection }) {
    const { foods } = useContext(PlanContext);

    const [food, setFood] = useState(foods[0]);

    const onChange = (event) => {
        setFood(event.target.value);
        handleSelection(index, event.target.value)
    }

    return (
      <select value={food} onChange={onChange}>
        {foods.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }
  
  export default Meal;