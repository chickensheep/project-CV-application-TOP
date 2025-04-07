import { useState } from "react";

function ShowExperienceForm(props) {
	const [company, setCompany] = useState("");
	const [position, setPosition] = useState("");
	const [start, setStart] = useState("");
	const [end, setEnd] = useState("");
	const [description, setDescription] = useState("");

	function handleSave() {
		const experienceData = { company, position, start, end, description };
		props.onClick(experienceData);
	}

	let isFormInvalid;
	if (
		company !== "" &&
		position !== "" &&
		parseInt(start) &&
		parseInt(end) &&
		description !== ""
	) {
		isFormInvalid = false;
	} else {
		isFormInvalid = true;
	}

	return (
		<>
			<form action="">
				<div>
					<label htmlFor="company">Company: </label>
					<input
						id="company"
						type="text"
						onChange={(e) => setCompany(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="position">Position title: </label>
					<input
						id="posistion"
						type="text"
						onChange={(e) => setPosition(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="start">Start year: </label>
					<input
						id="start"
						type="text"
						onChange={(e) => setStart(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="end">End year: </label>
					<input
						id="end"
						type="text"
						onChange={(e) => setEnd(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="description">Job description: </label>
					<textarea
						name=""
						id="description"
						onChange={(e) => setDescription(e.target.value)}
						style={{ fontSize: "15px" }}
					></textarea>
				</div>

				<button
					onClick={handleSave}
					style={{ fontSize: "15px" }}
					disabled={isFormInvalid}
				>
					Save
				</button>
			</form>
		</>
	);
}

export { ShowExperienceForm };
