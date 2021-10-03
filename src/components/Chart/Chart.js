import ChartBar from './ChartBar';
import './Chart.css'

function Chart(props) {

	const maxValue = Math.max(
		...(props.data.map(({ value }) => value))
	);

	return (
		<div className="chart">
			{props.data.map(({ label, value }) => (
				<ChartBar
					key={label}
					value={value}
					label={label}
					maxValue={maxValue}
				/>
			))}
		</div>
	);
}

export default Chart;