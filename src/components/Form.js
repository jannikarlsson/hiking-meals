import { useContext } from "react";
import DateInput from "./DateInput";
import Select from "./Select";
import { PlanContext } from "../contexts/PlanContext";

function Form() {
    const { days, setDays, meals, setMeals, foods, setFoods, people, setPeople } = useContext(PlanContext);

    const handleDaysInput = (event) => {
        setDays(event.target.value);
    }

    const handlePeopleInput = (event) => {
        setPeople(event.target.value);
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
                <Select changeFunction={setMeals} items={meals} header="Lägg till måltid:" />
                <Select changeFunction={setFoods} items={foods} header="Lägg till mat:"/>
            </div>
        </div>
    )
}
export default Form;