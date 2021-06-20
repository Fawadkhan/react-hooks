import { useState } from "react";
import ExpansionItem from "./ExpansionItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const [year, setFilterYear] = useState('2022')

    const sendFilterYear = filterYear => {
        setFilterYear(filterYear)
    }
  return (
    <div>
   
      <div className="expenses">
      <ExpensesFilter selected={year} onSubmitFilter={sendFilterYear}/>
        {props.expenses.map((item) => (
          <ExpansionItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        ))}
      </div>
    </div>
  );
};
export default Expenses;
