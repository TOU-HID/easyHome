import React from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
function DateRange() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);
  <DateRange
    editableDateInputs={true}
    onChange={(item) => setState([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={state}
  />;

  return <></>;
}

export default DateRange;
