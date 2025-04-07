import { ShowCv } from "./ShowCv";
import { ShowEducationForm } from "./ShowEducationForm";
import { ShowExperienceForm } from "./showExperienceForm";
import { useState } from "react";

function Questions() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const [educationFormShowed, setEducationFormShowed] = useState(false);
	const [educationList, setEducationList] = useState([]);
	const [experienceFormShowed, setExperienceFormShowed] = useState(false);
	const [experienceList, setExperienceList] = useState([]);

	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);

	const handleSaveEducation = (educationData) => {
		setEducationList((prev) => [...prev, educationData]);
		setEducationFormShowed(false);
	};

	const handleSaveExperience = (experienceData) => {
		setExperienceList((prev) => [...prev, experienceData]);
		setExperienceFormShowed(false);
	};

	const handleOpen1 = () => {
		setIsOpen1((prev) => !prev);
	};

	const handleOpen2 = () => {
		setIsOpen2((prev) => !prev);
	};

	const handleOpen3 = () => {
		setIsOpen3((prev) => !prev);
	};

	return (
		<div className="container">
			<div className="cvContainer">
				{
					<ShowCv
						name={name}
						email={email}
						phone={phone}
						education={educationList}
						experience={experienceList}
					/>
				}
			</div>

			<div className="questionsContainer">
				<div className="questionsContainer2">
					<div className="dropdown1">
						<div
							className="dropdown"
							onClick={(e) => {
								togglePersonalInformation();
								changeBorder(e);
								handleOpen1();
							}}
						>
							<span>Personal information</span>
							<span className={`arrow ${isOpen1 ? "rotate" : ""}`}>▼</span>
						</div>
						<div className="personalInformationContainer">
							<div>
								<label htmlFor="name">Name: </label>
								<input
									type="text"
									id="name"
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor="email">Email: </label>
								<input
									type="email"
									id="email"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor="phone">Phone: </label>
								<input
									type="tel"
									id="phone"
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
						</div>
					</div>

					<div className="dropdown2">
						<div
							className="dropdown"
							onClick={(e) => {
								toggleEducationalExperience();
								changeBorder(e);
								handleOpen2();
							}}
						>
							<span>Educational experience</span>
							<span className={`arrow ${isOpen2 ? "rotate" : ""}`}>▼</span>
						</div>
						<div className="educationalExperienceContainer">
							{educationFormShowed && (
								<ShowEducationForm onClick={handleSaveEducation} />
							)}
							<div
								className="addEducation"
								onClick={() => {
									setEducationFormShowed(true);
								}}
							>
								➕
							</div>
						</div>
					</div>

					<div className="dropdown3">
						<div
							className="dropdown"
							onClick={(e) => {
								toggleExperience();
								changeBorder(e);
								handleOpen3();
							}}
						>
							<span>Experience</span>
							<span className={`arrow ${isOpen3 ? "rotate" : ""}`}>▼</span>
						</div>
						<div className="experienceContainer">
							{experienceFormShowed && (
								<ShowExperienceForm onClick={handleSaveExperience} />
							)}
							<div
								onClick={() => {
									setExperienceFormShowed(true);
								}}
							>
								➕
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function togglePersonalInformation() {
	document
		.querySelector(".personalInformationContainer")
		.classList.toggle("visible");
}

function toggleEducationalExperience() {
	document
		.querySelector(".educationalExperienceContainer")
		.classList.toggle("visible");
}

function toggleExperience() {
	document.querySelector(".experienceContainer").classList.toggle("visible");
	document;
}

function changeBorder(e) {
	e.currentTarget.classList.toggle("border");
}

export { Questions };
