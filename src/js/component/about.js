import React from "react";
import resume from "../../img/CPCV.pdf";

export const About = () => {
	return (
		<section className="page-section bg-secondary text-white  mb-0">
			<div className="container pt-5" id="about">
				<h2 className="page-section-heading text-center text-uppercase text-white">About Me</h2>

				<div className="divider-custom divider-light">
					<div className="divider-custom-line" />
					<div className="divider-custom-icon">
						<i className="fab fa-react" />
					</div>
					<div className="divider-custom-line" />
				</div>

				<div className="row d-flex justify-content-center">
					<div className="col-lg-8 text-center ">
						<p className="lead text-center">
							I&#39;m a self-taught, proactive person, with a quick learning curve and always focused on
							results. I&#39;m in the constant search of new challenges that help me grow both personally
							and professionally. My goal is to find a company that guides me to expand my coding
							abilities and knowledge while working side by side in order ot reach proposed goals.
						</p>
					</div>
				</div>

				<div className="text-center mt-4">
					<a className="btn btn-xl btn-outline-light" href={resume} download="Carlos Plaza Resume">
						<i className="fas fa-download mr-2" />
						Download Resume
					</a>
				</div>
			</div>
		</section>
	);
};
