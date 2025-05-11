import "bootstrap/dist/css/bootstrap.min.css";
import pic from "../public/vite.svg";
import { useState } from "react";

const steps = ["Step 1", "Step 2", "Step 3 ", "Step 4"];

function App() {
	const [currentStep, setCurrentStep] = useState(0);

	const handleNext = () => {
		if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
	};

	const handlePrevious = () => {
		if (currentStep > 0) setCurrentStep(currentStep - 1);
	};

	const handleStepClick = () => {
		setCurrentStep(index);
	};

	const renderStepContent = () => {
		switch (currentStep) {
			case 0:
				return (
					<>
						<h3>Step 1</h3>
						<p>step1 div</p>
					</>
				);
			case 1:
				return (
					<>
						<h3>Step 2</h3>
						<p>step2 div</p>
					</>
				);
			case 2:
				return (
					<>
						<h3>Step 3</h3>
						<p>step3 div</p>
					</>
				);
			case 3:
				return (
					<>
						<h3>Terms and Conditions</h3>
						<span>
							Please read the following terms carefully before submitting your
							information.
						</span>
						<ul>
							<li>
								Accuracy of information <br />
								You confirm that all information provided in this form is true,
								complete, and accurate to the best of your knowledge.
							</li>
						</ul>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<>
			<div className="container bg-info p-8">
				<div className="row d-flex justify-content-center align-items-center shadow  h-[100vh]">
					<div
						div
						className="col-xs-6 col-md-4 bg-primary text-white p-4 rounded"
					>
						<img
							src={pic}
							alt="An Image of the vite logo"
						/>
						<h1>Registration</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
							pariatur beatae hic.
						</p>
					</div>

					<div className="col-xs-12 col-md-8">
						<ul className="nav nav-tabs mb-3">
							{steps.map((step, index) => (
								<li
									key={index}
									className={`list-group-item ${
										currentStep === index ? "active" : ""
									}`}
									onClick={() => handleStepClick(index)}
								>
									{step}
								</li>
							))}
						</ul>

						<div>
							<div>{renderStepContent()}</div>
						</div>

						<div className="d-flex justify-content-between mt-3">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={handlePrevious}
								disabled={currentStep === 0}
							>
								Previous
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={handleNext}
								disabled={currentStep === steps.length - 1}
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
