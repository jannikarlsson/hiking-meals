import { useContext } from "react";
import DateInput from "./DateInput";
import Select from "./Select";
import { PlanContext } from "../contexts/PlanContext";

function Form() {
    const { days, setDays, meals, setMeals, foods, setFoods } = useContext(PlanContext);

    const handleDaysInput = (event) => {
        setDays(event.target.value);
    }

    return (
        <div>
            <input
                type="number"
                value={days}
                onChange={handleDaysInput}
            />
            <DateInput />
            <Select changeFunction={setMeals} items={meals} header="Select meals:" />
            <Select changeFunction={setFoods} items={foods} header="Select foods:"/>
        </div>
    )
}
export default Form;