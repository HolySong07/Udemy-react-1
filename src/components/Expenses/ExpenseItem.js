import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate.js";
import React, {useState} from "react";



const ExpenseItem = props => {

	const [title, setTitle] = useState(props.title);

	

	const clickHendler = () => {
		setTitle("clicked");

	}

	return (
		<Card className="expense-item">
			<div className="">
				<ExpenseDate date={props.date} />
			</div>
			<div className="expense-item__description">
				<h2>{title}</h2>
			</div>
			<div className="expense-item__price">${props.amount}</div>
			<button onClick={clickHendler}>Change title</button>
		</Card>
	)
};

export default ExpenseItem;