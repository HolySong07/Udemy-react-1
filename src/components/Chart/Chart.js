import "./Chart.css"
import ChartBar from "./ChartBar"

const Chart = props => {
	const dataPointValues = props.dataPoints.map(datdaPoint => datdaPoint.value); // собираем все максимальные числа с объекта в масисв
	const totalMaximum = Math.max(...dataPointValues); // получаем максимальное число
	
	
	return (
		<div className="chart">
			
			{props.dataPoints.map(item => (
				<ChartBar 
					value={item.value}
					maxValue={totalMaximum}
					label={item.label}
					key={item.label}
				/>
			))}
			

		</div>
	)
}

export default Chart