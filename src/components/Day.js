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
        if (meals.length > 0) {
          setTotalMeals([...totalMeals, foods[0]]);
        }
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
            <div key={index} className="p-2">
                <div><Meal key={index} index={index} handleSelection={changeTotal} meal={meal} /></div>
            </div>
        )
    })
        
    return (
        <>
        <div className="card mt-3 bg-light">
            <div className="card-header pt-3">
                <h5 className="card-title">Dag {dayNumber}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{date.toLocaleDateString()}</h6>
            </div>
            <div className="card-body">
                {renderedMeals}
            </div>
        </div>
        </>
    ) 
}
export default Day;