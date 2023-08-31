import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {

	const [filteredYeear, setFilteredYeear] = useState("2020"); // задаем по умолчанию год, который в селекте
	const [filterInfoText, setFilterInfoText] = useState("2019, 2021, 2022"); // выводим текст, если выбран 2020 год

	const filterChangeHandler = (selectedYear) => { // если в другом файле выбрали другой год, функиця запускается в другом файле
		setFilteredYeear(selectedYear); // меняем состояние

		if (selectedYear === "2021") {
			setFilterInfoText("2019, 2020, 2022");
		} else if (selectedYear === "2019") {
			setFilterInfoText("2020, 2021, 2022");
		} else if (selectedYear === "2022") {
			setFilterInfoText("2019, 2020, 2021");
		} else {
			setFilterInfoText("2019, 2021, 2022");
		}
		console.log(selectedYear);
	}

	// filteredYeear - человек кликнул на селек, мы получаем какой год он выбрал
	// сравниваем потом, элемент с объекта и год что выбрали в селекте, совпадает ли "===""
	const filterExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYeear;
	} );
	//


	return (
		<>
			
			<Card className="expenses">
			
			<ExpensesFilter selected={filteredYeear} onChangeFilter={filterChangeHandler}/>
			<ExpensesChart expense={filterExpenses}/>
			<p className="white">Data for years {filterInfoText} is hidden</p>
			<ExpensesList  items={filterExpenses}/>

			</Card>
		</>
	)
}

export default Expenses;