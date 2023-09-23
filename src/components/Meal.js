import { useState, useContext } from "react";
import { PlanContext } from "../contexts/PlanContext";

function Meal({ index, handleSelection, meal }) {
    const { foods } = useContext(PlanContext);

    const [food, setFood] = useState(foods[0]);

    const onChange = (event) => {
        setFood(event.target.value);
        handleSelection(index, event.target.value)
    }

    return (
        <div className="input-group mb-3">
            <label className="input-group-text">{meal}</label>
            <select value={food} onChange={onChange} className="form-select">
                {foods.map((item, index) => (
                <option key={index} value={item}>
                    {item}
                </option>
                ))}
            </select>
        </div>
    );
  }
  
  export default Meal;