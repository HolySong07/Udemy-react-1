import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, {useState} from "react";

let NewExpenses = (props) => {
	function saveExpenseDateHandler(enteredExpenseData) { // аттрибутом приняли инфу с другого файла, где заполнили форму
		const expenseData = {
			...enteredExpenseData, // записываем инфу что приняли в переменную, это объект
			id: Math.random().toString() // добавили рандомное число
		}
		//console.log(expenseData); // показали весь объект, который заполнили в файле ExpenseForm
		
		props.getObjectFromForm(expenseData);
	}

	let [isediting, setisediting] = useState(false);

	const startEditingHandler = (e) => {
		setisediting(true);
	}

	const stopEditingHandler = (bool) => {
		setisediting(bool);
	}

	return(
		<div className="new-expense">
			{!isediting && <button onClick={startEditingHandler}>Add new Expense</button>}
			{isediting && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} cancel={stopEditingHandler}/>}
		</div>
	)
}

export default NewExpenses;