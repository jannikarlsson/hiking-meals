import React, { useContext } from 'react';
import { PlanContext } from '../contexts/PlanContext';

function DateInput() {
  const { state, state: { date }, setState } = useContext(PlanContext);

  const handleDateChange = (event) => {
    const [year, month, day] = event.target.value.split('-').map(Number);
    const newDate = new Date(year, month - 1, day);
    setState({ ...state, date: newDate });
  };

  return (
    <div className="input-group mb-3 col-12 col-md">
      <span className="input-group-text">När startar ni?</span>
      <input
        className="form-control"
        type="date"
        value={date.toISOString().split('T')[0]}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DateInput;
