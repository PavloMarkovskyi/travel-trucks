'use client';

import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { format, parse } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './react-datepicker-overrides.css';
import styles from './DatePicker.module.css';

interface Props {
  value: string;
  onChange: (dateString: string) => void;
}

const DatePickerField = ({ value, onChange }: Props) => {
  const parsedInitial = value ? parse(value, 'dd-MM-yyyy', new Date()) : null;
  const [selectedDate, setSelectedDate] = useState<Date | null>(parsedInitial);
  useEffect(() => {
    const parsed = value ? parse(value, 'dd-MM-yyyy', new Date()) : null;
    setSelectedDate(parsed);
  }, [value]);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const formatted = format(date, 'dd-MM-yyyy');
      onChange(formatted);
    } else {
      onChange('');
    }
  };
  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd-MM-yyyy"
      placeholderText="Booking date*"
      className={styles.inputDate}
      minDate={new Date()}
      calendarClassName={styles.calendar}
      dayClassName={() => styles.day}
      popperClassName={styles.popper}
      formatWeekDay={nameOfDay => nameOfDay.slice(0, 3).toUpperCase()}
    />
  );
};

export default DatePickerField;
