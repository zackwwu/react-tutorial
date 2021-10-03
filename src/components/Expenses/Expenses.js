import { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
	const [filterYear, setFilterYear] = useState('2020')
	const filterYearChangeHandler = (year) => {
		setFilterYear(year)
	}

	const filteredItems = props.items.filter(({ date }) => (
		date.getFullYear().toString() === filterYear
	));

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter onFilterYearChanged={filterYearChangeHandler} selected={filterYear} />
				<ExpensesChart expenses={filteredItems} />
				{filteredItems.map(({ id, title, amount, date }) => (
					<ExpenseItem
						key={id}
						title={title}
						amount={amount}
						date={date}
					/>
				))}
			</Card>
		</div>
	);
}

export default Expenses;
