import React, { useState, useEffect, useContext } from 'react';
import { PlanContext } from '../contexts/PlanContext';

function DateInput() {
  const [formattedDate, setFormattedDate] = useState('');
  const { state, setState } = useContext(PlanContext);
  const { date } = state;

  useEffect(() => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formatted = `${year}-${month}-${day}`;
    setFormattedDate(formatted);
  }, [date]);

  const handleDateChange = (event) => {
    const newFormattedDate = event.target.value;
    setFormattedDate(newFormattedDate);

    const [year, month, day] = newFormattedDate.split('-').map(Number);
    const newDate = new Date(year, month - 1, day);
    setState({...state, date: newDate})
  };

  return (
    <div className="input-group mb-3 col-12 col-md">
        <span className="input-group-text">När startar ni?</span>
        <input
            className="form-control"
            type="date"
            value={formattedDate}
            onChange={handleDateChange}
        />
    </div>
    
  );
}

export default DateInput;