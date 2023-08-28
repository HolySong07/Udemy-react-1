import React, {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
	let [title1, setTitle] = useState("");
	let [amount1, setAmount] = useState("");
	let [date1, setDate] = useState("");

	const titleChangeHnadler = (e) => {
		setTitle(e.target.value);
	}	

	const amountChangeHnadler = (e) => {
		setAmount(e.target.value);
	}

	const dateChangeHnadler = (e) => {
		setDate(e.target.value);
	}

	let submitHandler = (e) => {
		e.preventDefault();
		let expenseData = {
			title: title1,
			amount: amount1,
			date: new Date(date1)
		};

		setTitle("");
		setAmount("");
		setDate("");
		console.log(expenseData);
	
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={title1} onChange={titleChangeHnadler}/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" min="0.01" value={amount1} step="0.01" onChange={amountChangeHnadler}/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" min="2019-01-01" value={date1} max="2022-12-31" onChange={dateChangeHnadler}/>
				</div>
				<div className="new-expense__actions">
					<button type="Submit">Add Expense</button>
				</div>

			</div>
		</form>
	)
}

export default ExpenseForm