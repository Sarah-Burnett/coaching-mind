import { Paper } from "../styles/components";

export default function Notepad({ props }) {
	const keys = Object.keys(props);
	return (
		<Paper>
			<ul>
				<li>
					<div></div>
				</li>
				{keys.map((key) => (
					<li key={key}>
						<div>
							<h4>{key}:</h4>
							<span>{props[key]}</span>
						</div>
					</li>
				))}
				<li>
					<div></div>
				</li>
			</ul>
		</Paper>
	);
}
