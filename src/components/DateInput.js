import React, { useState, useEffect, useContext } from 'react';
import { PlanContext } from '../contexts/PlanContext';

function DateInput() {
  const [formattedDate, setFormattedDate] = useState('');
  const { date, setDate } = useContext(PlanContext);

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
    setDate(newDate);
  };

  return (
    <input
      type="date"
      value={formattedDate}
      onChange={handleDateChange}
    />
  );
}

export default DateInput;