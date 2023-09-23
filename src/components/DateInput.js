import React, { useState, useEffect } from 'react';

function DateInput({ date, changeDate }) {
  const [formattedDate, setFormattedDate] = useState('');

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
    changeDate(newDate);
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