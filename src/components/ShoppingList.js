import { useEffect, useState, useContext } from "react";
import { PlanContext } from "../contexts/PlanContext";

function ShoppingList({ mealsList }) {
    const [list, setList] = useState([]);
    const { foods, people } = useContext(PlanContext);

    useEffect(() => {
        setList(Object.values(mealsList).flatMap(innerArray => innerArray).filter(item => item !== foods[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mealsList]);

    const sortList = () => {
        const counts = {};

        for (const item of list) {
            counts[item] = (counts[item] || 0) + (1 * people);
        }

        const formattedList = [];
        for (const item in counts) {
            if (counts[item] > 1) {
            formattedList.push(`${counts[item]} x ${item}`);
            } else {
            formattedList.push(item);
            }
        }
        return formattedList;
    }

    const renderedMealsList = sortList().map((meal, index) => <div key={index}>{meal}</div>)

    return (
        <div className="card mt-3 bg-warning">
            <div className="card-header pt-3">
                <h5 className="card-title">Sammanställning</h5>
            </div>
            <div className="card-body">
            {renderedMealsList}
            </div>
        </div>
    )
}
export default ShoppingList;