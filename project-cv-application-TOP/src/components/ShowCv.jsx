import profileIcon from "/profile.svg";
import emailIcon from "/email.svg";
import callIcon from "/call.svg";

function ShowCv({ name, email, phone, education, experience }) {
	return (
		<>
			<div className="cv">
				{(name || email || phone) && (
					<>
						<h1>Personal information</h1>
						{name && (
							<div className="name">
								<img
									src={profileIcon}
									alt="Profile icon"
									style={{ width: "25px" }}
								/>
								<span style={{ fontSize: "20px" }}>{name}</span>
							</div>
						)}

						{email && (
							<div className="email">
								<img
									src={emailIcon}
									alt="Email icon"
									style={{ width: "25px" }}
								/>
								<span style={{ fontSize: "20px" }}>{email}</span>
							</div>
						)}

						{phone && (
							<div className="phone">
								<img src={callIcon} alt="Call icon" style={{ width: "25px" }} />
								<span style={{ fontSize: "20px" }}>{phone}</span>
							</div>
						)}
					</>
				)}

				{education.length > 0 && (
					<>
						<h2>Education</h2>
						<ul>
							{education.map((edu, index) => (
								<li key={index}>
									<span style={{ fontSize: "20px" }}>
										<b>{edu.school}</b>
									</span>
									<br />
									{edu.startYear} - {edu.endYear}
								</li>
							))}
						</ul>
					</>
				)}

				{experience.length > 0 && (
					<>
						<h2>Experience</h2>
						<ul>
							{experience.map((element, index) => (
								<li key={index}>
									<span style={{ fontSize: "20px" }}>
										<b>
											{element.position} at {element.company}
										</b>
									</span>
									<br /> {element.start} - {element.end}
									<br />
									{element.description}
								</li>
							))}
						</ul>
					</>
				)}

				<div>{/* <br /> */}</div>
			</div>
		</>
	);
}

export { ShowCv };
