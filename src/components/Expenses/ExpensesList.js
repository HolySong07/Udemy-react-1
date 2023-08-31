import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

	//
	// записываем новые данные в переменную если массив не пустй и мы что-то выводим
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Found noexpenses</h2>
	}
	//

	return (
		<ul className="expenses-list">
			{props.items.map((expense) => (
			<ExpenseItem 
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}/>
		))}
		</ul>
		
	)
}

export default ExpensesList;