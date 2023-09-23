import { useEffect, useState } from "react";

function ShoppingList({ mealsList }) {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(Object.values(mealsList).flatMap(innerArray => innerArray));
    }, [mealsList]);

    const sortList = () => {
        const counts = {};

        for (const item of list) {
            counts[item] = (counts[item] || 0) + 1;
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

    return <div>{renderedMealsList}</div>
}
export default ShoppingList;