import { useState } from "react";

function ShowEducationForm(props) {
	const [school, setSchool] = useState("");
	const [startYear, setStartYear] = useState("");
	const [endYear, setEndYear] = useState("");

	function handleSave() {
		const educationData = {
			school,
			startYear,
			endYear,
		};
		props.onClick(educationData);
	}

	let isFormInvalid;
	if (school !== "" && parseInt(startYear) && parseInt(endYear)) {
		isFormInvalid = false;
	} else {
		isFormInvalid = true;
	}

	return (
		<>
			<form>
				<div>
					<label htmlFor="school">School: </label>
					<input
						id="school"
						type="text"
						onChange={(e) => setSchool(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="startYear">Start year: </label>
					<input
						id="startYear"
						type="month"
						onChange={(e) => setStartYear(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="endYear">End year: </label>
					<input
						id="endYear"
						type="month"
						onChange={(e) => setEndYear(e.target.value)}
					/>
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

export { ShowEducationForm };
