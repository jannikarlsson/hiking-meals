import DateInput from "./DateInput";
import Select from "./Select";

function Form({ changeMeals, meals, changeFoods, foods, changeDays, days, changeDate, date }) {

    const handleDaysInput = (event) => {
        changeDays(event.target.value);
    }

    return (
        <div>
            <input
                type="number"
                value={days}
                onChange={handleDaysInput}
            />
            <DateInput date={date} changeDate={changeDate} />
            <Select changeFunction={changeMeals} items={meals} header="Select meals:" />
            <Select changeFunction={changeFoods} items={foods} header="Select foods:"/>
        </div>
    )
}
export default Form;