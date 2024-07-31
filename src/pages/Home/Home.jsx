import categories from "../../assets/categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import Button from "../../components/ui/Button/Button";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/ui/Spinner/Spinner";
import Input from "../../components/form/Input/Input";
import Checkbox from "../../components/form/Checkbox/Checkbox";

function Home() {
	return (
		<div className="home">
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

			<div className="buttons">
				<Button fullW disabled>
					Button
				</Button>
				<br />
				<Button outlined>Button</Button>
				<br />
				<Button variant="primary" centered>
					Button
				</Button>
				<br />
				<Button variant="primary" outlined>
					Button
				</Button>
				<br />
				<Button variant="secondary" icon round>
					<FontAwesomeIcon icon={faAppleWhole} />
				</Button>
				<br />
				<Button variant="secondary" outlined>
					Button
				</Button>
				<br />
				<Button variant="success" round>
					Button
				</Button>
				<br />
				<Button variant="success" outlined>
					Button
				</Button>
				<br />
				<Button variant="danger">Button</Button>
				<br />
				<Button variant="danger" outlined>
					Button
				</Button>
				<br />
				<Button variant="info">Button</Button>
				<br />
				<Button variant="info" outlined>
					Button
				</Button>
			</div>

			<Spinner size="3rem" variant="accent" text="tetxt text like loading..." />

			<br />
			<br />
			<br />

			<div className="inputs">
				<Input label="Input" id="input" placeholder="Input" fullW required />
				<br />
				<Input
					direction="horizontal"
					variant="success"
					label="Input"
					id="input3"
					placeholder="Input"
				/>
				<br />
				<Input
					variant="danger"
					type="password"
					label="Input"
					id="input2"
					placeholder="Input"
					centered
				/>
				<br />
			</div>

			<form className="checkboxes">
				<Checkbox label="Checkbox" required />
				<br />
				<br />
				<br />

				<button type="submit">submit</button>
			</form>
		</div>
	);
}

export default Home;
