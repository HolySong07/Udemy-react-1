import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate.js";


const ExpenseItem = props => {
	

	return (
		<Card className="expense-item">
			<div className="">
				<ExpenseDate date={props.date} />
			</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
			</div>
			<div className="expense-item__price">${props.amount}</div>
		</Card>
	)
};

export default ExpenseItem;