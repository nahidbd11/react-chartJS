import React, { useState } from "react";
import "./style.css";
import ChartBar from "./components/chartjs/ChartBar";
import { useGraph } from "./contextApi/GraphContext";
import LineRechart from "./components/recharts/LineRechart";

export default function App() {
	const { playerData } = useGraph();
	return (
		<div>
			<ChartBar chartData={playerData} />
			<LineRechart />
		</div>
	);
}
