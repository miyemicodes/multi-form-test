import "bootstrap/dist/css/bootstrap.min.css";
import pic from ".././src/assets/react.svg";
import { useState } from "react";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

function App() {
	const [currentStep, setCurrentStep] = useState(0);

	const handleNext = () => {
		if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
	};

	const handlePrevious = () => {
		if (currentStep > 0) setCurrentStep(currentStep - 1);
	};

	const handleStepClick = (index) => {
		setCurrentStep(index);
	};

	const renderStepContent = () => {
		switch (currentStep) {
			case 0:
				return (
					<form>
						<div className="row mb-3">
							<div className="col-md-6">
								<input
									type="text"
									name="firstName"
									className="form-control border-0 border-bottom rounded-0"
									placeholder="First Name"
								/>
							</div>
							<div className="col-md-6">
								<input
									type="text"
									name="lastName"
									className="form-control border-0 border-bottom rounded-0"
									placeholder="Last Name"
								/>
							</div>
						</div>

						<div className="row mb-3">
							<div className="col-md-6">
								<input
									type="email"
									className="form-control border-0 border-bottom rounded-0"
									name="email"
									placeholder="Your Email"
									required
								/>
							</div>
							<div className="col-md-6">
								<input
									type="tel"
									className="form-control border-0 border-bottom rounded-0"
									name="telephone"
									placeholder="Your Telephone"
									required
								/>
							</div>
						</div>

						<div className="row mb-3">
							<div className="col-md-6">
								<input
									type="number"
									className="form-control border-0 border-bottom rounded-0"
									name="age"
									placeholder="Age"
									required
								/>
							</div>

							<div className="col-md-6 d-flex align-items-center gap-3">
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="gender"
										value="female"
										id="female"
									/>
									<label
										className="form-check-label"
										htmlFor="female"
									>
										Female
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="gender"
										value="male"
										id="male"
									/>
									<label
										className="form-check-label"
										htmlFor="male"
									>
										Male
									</label>
								</div>
							</div>
						</div>
					</form>
				);

			case 1:
				return (
					<form>
						<div className="row mb-3">
							<input
								type="text"
								className="form-control border-0 border-bottom rounded-0"
								placeholder="Street 1"
							/>
						</div>
						<div className="row mb-3">
							<input
								type="text"
								className="form-control border-0 border-bottom rounded-0"
								placeholder="Street 2"
							/>
						</div>

						<div className="row mb-3">
							<div className="col-md-6">
								<input
									type="text"
									className="form-control border-0 border-bottom rounded-0"
									placeholder="City"
								/>
							</div>
							<div className="col-md-6">
								<input
									type="text"
									className="form-control border-0 border-bottom rounded-0"
									placeholder="State"
								/>
							</div>
						</div>

						<div className="row mb-3">
							<div className="col-md-6">
								<input
									type="text"
									className="form-control border-0 border-bottom rounded-0"
									placeholder="Country"
								/>
							</div>
							<div className="col-md-6">
								<input
									type="text"
									className="form-control border-0 border-bottom rounded-0"
									placeholder="Zip Code"
								/>
							</div>
						</div>
					</form>
				);

			case 2:
				return (
					<form>
						<div className="row mb-3">
							<span className="small text-muted">
								Please provide the following information for verification
								purposes.
							</span>

							<div className="row mb-3">
								<div className="col-md-6">
									<input
										type="text"
										name="NIN"
										className="form-control border-0 border-bottom rounded-0"
										placeholder="NIN"
									/>
								</div>
								<div className="col-md-6">
									<input
										type="text"
										name="BVN"
										className="form-control border-0 border-bottom rounded-0"
										placeholder="BVN"
									/>
								</div>
							</div>
						</div>

						<div className="mb-3">
							<label
								for="formFile"
								className="form-label small"
							>
								<strong>Upload Front of ID(JPG,PNG,PDF - Max:5MB)</strong>
							</label>
							<input
								class="form-control"
								type="file"
								id="formFile"
							/>
							<span className="small">
								<em>
									Make sure the uploaded image is clear and all text is readable
								</em>
							</span>
						</div>

						<div className="mb-3">
							<label
								for="formFile"
								className="form-label small"
							>
								<strong>Upload Back of ID(JPG,PNG,PDF - Max:5MB)</strong>
							</label>
							<input
								class="form-control"
								type="file"
								id="formFile"
							/>
							<span className="small">
								<em>
									Make sure the uploaded image is clear and all text is readable
								</em>
							</span>
						</div>
					</form>
				);

			case 3:
				return (
					<>
						<div className="text-center">
							<h3>Terms and Conditions</h3>
							<span>
								Please read terms carefully before submitting your information.
							</span>
						</div>

						<ol className="list-group-numbered mt-3">
							<li className="list-group-item">
								<strong>Accuracy of information:</strong> All information
								provided is true and complete.
							</li>
							<li className="list-group-item">
								<strong>Use of information:</strong> Used in accordance with our{" "}
								<a href="#">privacy policy</a>.
							</li>
							<li className="list-group-item">
								<strong>Consent:</strong> By submitting, you consent to the
								terms.
							</li>
						</ol>
						<div className="form-check mt-3">
							<input
								type="checkbox"
								className="form-check-input"
								id="acceptTerms"
								name="acceptTerms"
							/>
							<label
								className="form-check-label"
								htmlFor="acceptTerms"
							>
								Please accept <a href="#">terms and conditions</a>
							</label>
						</div>
					</>
				);

			default:
				return null;
		}
	};

	return (
		<div className="container bg-info bg-opacity-10 py-5 min-vh-100">
			<div className=" d-flex justify-content-center align-items-center rounded mx-auto p-2 gap-3">
				<div className="col-md-4 text-start bg-primary text-white p-4 rounded">
					<img
						src={pic}
						alt="Vite Logo"
						className="img-fluid mb-3"
						style={{ width: "120px" }}
					/>
					<h1>Registration</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit,psum dolor
						sit amet consectetur adipisicing elit psum dolor sit amet
						consectetur adipisicing elit,
					</p>
				</div>

				<div className="col-md-8 bg-white p-4 rounded">
					<ul className="nav nav-tabs bg-transparent mb-3">
						{steps.map((step, index) => (
							<li
								key={index}
								className="nav-item"
							>
								<button
									type="button"
									className={`nav-link ${
										currentStep === index
											? "active bg-info bg-opacity-10 text-dark"
											: ""
									}`}
									onClick={() => handleStepClick(index)}
								>
									{step}
								</button>
							</li>
						))}
					</ul>

					<div className="card-body">{renderStepContent()}</div>

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
							className={`btn ${
								currentStep === steps.length - 1 ? "btn-success" : "btn-primary"
							}`}
							onClick={handleNext}
						>
							{currentStep === steps.length - 1 ? "Finish" : "Next"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
