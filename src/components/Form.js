import { useContext } from "react";
import DateInput from "./DateInput";
import Select from "./Select";
import { PlanContext } from "../contexts/PlanContext";

function Form() {
    const { state, setState } = useContext(PlanContext);
    const { days, meals, foods, people } = state;

    const handleStateUpdate = (property, value) => {
        setState({ ...state, [property]: value });
    }

    const handleDaysInput = (event) => {
        handleStateUpdate('days', event.target.value);
    }

    const handlePeopleInput = (event) => {
        handleStateUpdate('people', event.target.value);
    }

    const handleSetMeals = (value) => {
        handleStateUpdate('meals', value);
    }

    const handleSetFoods = (value) => {
        handleStateUpdate('foods', value);
    }

    return (
        <div className="mt-3">
            <div className="container row m-auto">
                <div className="input-group mb-3 col-12 col-md">
                    <span className="input-group-text">Hur många är ni?</span>
                    <input type="number" className="form-control" value={people}
                    onChange={handlePeopleInput} min="0"/>
                </div>
                <div className="input-group mb-3 col-12 col-md">
                    <span className="input-group-text">Hur många dagar ska ni vandra?</span>
                    <input type="number" className="form-control" value={days}
                    onChange={handleDaysInput} min="0"/>
                </div>
                <DateInput />
                <Select changeFunction={handleSetMeals} items={meals} header="Lägg till måltid:" />
                <Select changeFunction={handleSetFoods} items={foods} header="Lägg till mat:"/>
            </div>
        </div>
    )
}
export default Form;