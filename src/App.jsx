import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import categories from "./assets/categories";

function App() {
	return (
		<div className="app">
			<h1>Hello</h1>

			<div className="categories">
				{categories.map((category) => (
					<>
						<button
							style={{
								"--text-color": category.colors.text,
								"--bg-color": category.colors.bg,
							}}>
							<FontAwesomeIcon icon={category.icon} />
							{category.text}
						</button>
						<br />
					</>
				))}
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae provident illum
				enim, nobis laboriosam quo aliquam asperiores itaque quaerat ex optio quam illo est vel
				placeat. Esse, quam? Ipsam maiores ea officia nemo in quibusdam qui exercitationem, quae
				sed laudantium magnam. Officiis enim numquam possimus quia perferendis id, fuga sunt.
			</p>
		</div>
	);
}

export default App;
