
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props) => {
    const sendExpenseItemsUp = expenses => {
        const expenseData = {
            ...expenses, 
            id: Math.random().toString()
        } 

        props.sendExpenseToApp(expenseData)

    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitFormData={sendExpenseItemsUp} />
        </div>
    )
}
export default NewExpenses;