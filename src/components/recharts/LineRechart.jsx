import React from "react";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { rechartsData as data } from "../../data";
const LineRechart = () => {
	return (
		<div>
			LineRechart
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="year" label={{ value: "year", position: "center" }} />
					<YAxis tick={{ stroke: "red" }} tickFormatter={(val) => `$${val}`} />
					<Tooltip />
					<Legend verticalAlign="top" />
					<Line
						type="natural"
						dataKey="earn"
						stroke="red"
						activeDot={{ r: 8 }}
						isAnimationActive={true}
						// animationDuration={10000}
						// animationBegin={2000}
						className="animation-chart"
						onAnimationStart={() => {
							console.log("animation starting");
						}}
						onAnimationEnd={() => console.log("End")}
					/>
					{/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default LineRechart;
