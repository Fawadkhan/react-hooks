import React, {useState} from 'react';

import './ExpenseFilter.css'

const ExpensesFilter = (props) => {

  const [year, setYearFilter] = useState('')

  const yearHandler = event => {
    setYearFilter(event.target.value)
    props.onSubmitFilter(event.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearHandler} >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;