import { useContext } from "react";
import DateInput from "./DateInput";
import Select from "./Select";
import { PlanContext } from "../contexts/PlanContext";
import TEXTS from "../texts";

function Form() {
    const { state, setState } = useContext(PlanContext);
    const { days, meals, foods, people, language } = state;

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
                    <span className="input-group-text">{TEXTS[language].numberPeople}</span>
                    <input type="number" className="form-control" value={people}
                    onChange={handlePeopleInput} min="0"/>
                </div>
                <div className="input-group mb-3 col-12 col-md">
                    <span className="input-group-text">{TEXTS[language].numberDays}</span>
                    <input type="number" className="form-control" value={days}
                    onChange={handleDaysInput} min="0"/>
                </div>
                <DateInput />
                <Select changeFunction={handleSetMeals} items={meals} header={TEXTS[language].addMeal} />
                <Select changeFunction={handleSetFoods} items={foods} header={TEXTS[language].addFood} />
            </div>
        </div>
    )
}
export default Form;