import React from 'react';
import { useDateContext } from '../contexts/DateContext';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isBefore,
  isAfter,
} from 'date-fns';

const DatePicker = ({ monthsToShow }) => {
  const {
    selectedDate,
    setSelectedDate,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
  } = useDateContext();

  const today = new Date();

  // Calculate the range of months based on the number of months to show
  const months = Array.from({ length: monthsToShow }, (_, i) => {
    const month = (selectedMonth + i) % 12;
    const year = selectedYear + Math.floor((selectedMonth + i) / 12);
    return {
      name: format(new Date(year, month), 'MMMM yyyy'),
      value: month,
      year,
    };
  });

  const getCalendarDates = (month, year) => {
    const start = startOfWeek(startOfMonth(new Date(year, month)));
    const end = endOfWeek(endOfMonth(new Date(year, month)));
    const dates = [];
    let currentDate = start;

    while (currentDate <= end) {
      dates.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }

    return dates;
  };

  const dates = getCalendarDates(selectedMonth, selectedYear);

  const handleDateClick = (date) => {
    if (
      isBefore(date, today) ||
      isAfter(date, endOfMonth(new Date(selectedYear, selectedMonth)))
    ) {
      return;
    }
    setSelectedDate(isSameDay(date, selectedDate) ? null : date);
  };

  const handleMonthChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const { value, year } = months[selectedIndex];
    setSelectedMonth(value);
    setSelectedYear(year);
    setSelectedDate(null);
  };

  const renderHeader = () => (
    <div className='flex items-center justify-between'>
      <div>
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className='mr-1 rounded border border-zinc-600 bg-background p-1'
        >
          {months.map((month, index) => (
            <option key={index} value={month.value}>
              {month.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderDays = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className='mb-2 grid select-none grid-cols-7 gap-1 text-center text-sm'>
        {daysOfWeek.map((day) => (
          <div key={day} className='flex items-center justify-center'>
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderDates = () => (
    <div className='grid grid-cols-7 gap-2'>
      {dates.map((date) => {
        const isPastDate =
          (isBefore(date, today) && isSameMonth(date, today)) ||
          isBefore(date, startOfMonth(new Date(selectedYear, selectedMonth)));
        const isFutureDate = isAfter(
          date,
          endOfMonth(new Date(selectedYear, selectedMonth))
        );
        return (
          <div
            key={date.toString()}
            onClick={() => handleDateClick(date)}
            className={`cursor-pointer rounded border border-zinc-600 p-1 text-center ${
              isSameMonth(date, new Date(selectedYear, selectedMonth))
                ? ''
                : 'border-zinc-600 text-zinc-600'
            } ${isSameDay(date, selectedDate) ? 'bg-primary text-white' : ''} ${isPastDate || isFutureDate ? 'cursor-not-allowed text-zinc-600' : ''}`}
          >
            <p className='select-none'>{format(date, 'd')}</p>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className='flex flex-col items-end gap-2 p-2 text-sm'>
      <h2 className='mb-4 text-base font-bold'>Select A Date</h2>
      <div className='flex flex-col items-end gap-4'>
        {renderHeader()}
        <div>
          {renderDays()}
          {renderDates()}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
