import { useDateContext } from '../contexts/DateContext';

const DatePickerSimple = () => {
  const { selectedDate, setSelectedDate } = useDateContext();

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value || null);
  };

  const clearDate = () => {
    setSelectedDate(null);
  };

  return (
    <div className='flex flex-col items-end gap-2 p-2 text-sm'>
      <h2 className='mb-4 text-base font-bold'>Select A Date</h2>
      <div className='flex flex-col items-end gap-2'>
        <input
          type='date'
          value={selectedDate || ''}
          onChange={handleDateChange}
          className='inputs w-[12rem] dark:[color-scheme:dark]'
        />
        <button className='underline' onClick={clearDate}>
          Clear Date
        </button>
      </div>
    </div>
  );
};

export default DatePickerSimple;
