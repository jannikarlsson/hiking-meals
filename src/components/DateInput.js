import React, { useContext } from 'react';
import { PlanContext } from '../contexts/PlanContext';
import TEXTS from '../texts';

function DateInput() {
  const { state, state: { date, language }, setState } = useContext(PlanContext);

  const handleDateChange = (event) => {
    setState({
      ...state,
      date: event.target.value
    })
  };

  return (
    <div className="input-group mb-3 col-12 col-md">
      <span className="input-group-text">{TEXTS[language].whenStart}</span>
      <input
        className="form-control"
        type="date"
        value={date}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DateInput;
