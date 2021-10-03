import { useState } from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
	const [expenses, setExpenses] = useState([])

	const addExpenseHandler = (expense) => {
		setExpenses((previousExpenses) => ([expense, ...previousExpenses]))
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
