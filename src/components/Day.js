import { useEffect, useState, useContext } from "react";
import Meal from "./Meal";
import { PlanContext } from "../contexts/PlanContext";

function Day({ date, dayNumber, updatePlanData }) {
    const { meals, foods } = useContext(PlanContext);

    const setInital = () => meals.map(_ => foods[0]);

    const [totalMeals, setTotalMeals] = useState(setInital());

    useEffect(() => {
        updatePlanData(date, totalMeals)
    }, []);

    useEffect(() => {
        setTotalMeals(setInital())
    }, [meals]);

    useEffect(() => {
        updatePlanData(date, totalMeals)
    }, [totalMeals]);

    const changeTotal = (index, meal) => {
        let totalMealsCopy = [...totalMeals];
        totalMealsCopy[index] = meal;
        setTotalMeals(totalMealsCopy);
    }

    const renderedMeals = meals.map((meal, index) => {
        return (
            <div key={index}>
                <div>{meal}</div>
                <div><Meal index={index} handleSelection={changeTotal}/></div>
            </div>
        )
    })
        
    return (
        <>
        <div>Day {dayNumber}, {date.toLocaleDateString()}</div>
        {renderedMeals}
        </>
    ) 
}
export default Day;