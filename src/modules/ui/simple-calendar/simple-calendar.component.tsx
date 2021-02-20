import type { ClassValue } from 'classnames/types';
import React, { useState } from 'react';
import classnames from 'classnames';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, DayValue } from 'react-modern-calendar-datepicker';

interface Props {
  className?: ClassValue;
}

const AntaresSimpleCalendar: React.FC<Props> = ({ className }) => {
  const [selectedDay, setSelectedDay] = useState<DayValue | null>(null);

  return (
    <div className={classnames('', className)}>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
      />
    </div>
  );
};

export default AntaresSimpleCalendar;
