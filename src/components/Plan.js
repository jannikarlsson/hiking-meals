import { useContext, useEffect, useState } from "react";
import Day from "./Day";
import ShoppingList from "./ShoppingList";
import { PlanContext } from "../contexts/PlanContext";

function Plan() {
    const { days, date, meals, foods } = useContext(PlanContext);

    const dateArray = () =>  Array.from({ length: days }, (_, index) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + index);
        return newDate;
    });

    const initialContent = () => dateArray().reduce((acc, date) => {
        acc[date] = meals.map(_ => foods[0]);
        return acc;
      }, {});

    const [planData, setPlanData] = useState(initialContent());

    const updatePlanData = (date, data) => {
        setPlanData((prevPlanData) => ({
          ...prevPlanData,
          [date]: data,
        }));
      };

    useEffect(() => {
        const newDates = dateArray().map(date => date.toString());
        let updatedPlanData = { ...planData };
      
        newDates.forEach(date => {
          if (!updatedPlanData[date]) {
            updatedPlanData = {
                ...updatedPlanData,
                [date]: meals.map(_ => foods[0]),
            }
          }
        });

        Object.keys(planData).forEach(date => {
            if (!newDates.includes(date)) delete updatedPlanData[date];
          })
     
        setPlanData(updatedPlanData);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [days]);

    useEffect(() => {
        const newDates = dateArray().map(date => date.toString());
        const updatedPlanData = { ...planData };

        Object.keys(updatedPlanData).forEach((oldDate, index) => {
            updatedPlanData[newDates[index]] = updatedPlanData[oldDate];
            delete updatedPlanData[oldDate];
        });

        setPlanData(updatedPlanData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date])

    useEffect(() => {
        setPlanData(initialContent());
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const dayList = dateArray().map((arrayDate, index) => (
        <div className="col-12 col-md-6">
        <Day key={index} date={arrayDate} dayNumber={index + 1} updatePlanData={updatePlanData}/>
        </div>
      ))

    return <div>
        <div className="container m-auto row mt-3 mb-3">{dayList}{dayList.length > 0 && <div className="col-12 col-md-6"><ShoppingList mealsList={planData}/></div>}</div>
    </div>
}
export default Plan;