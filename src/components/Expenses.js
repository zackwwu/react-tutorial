import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
	return (
		<Card className="expenses">
			{props.items.map(({ title, amount, date }) => (
				<ExpenseItem
					title={title}
					amount={amount}
					date={date}
				/>
			))}
		</Card>
	);
}

export default Expenses;
