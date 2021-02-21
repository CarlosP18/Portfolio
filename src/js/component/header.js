import React from "react";
import photo from "../../img/photo.jpeg";

export const Header = () => {
	return (
		<header className="masthead bg-primary text-white text-center" id="header">
			<div className="container d-flex align-items-center flex-column">
				<img className="masthead-avatar mb-5 rounded-circle" src={photo} alt="" />

				<h1 className="masthead-heading text-uppercase mb-0">Hi, i&#39;m Carlos</h1>

				<div className="divider-custom divider-light">
					<div className="divider-custom-line" />
					<div className="divider-custom-icon">
						<i className="fas fa-star" />
					</div>
					<div className="divider-custom-line" />
				</div>

				<p className="masthead-subheading font-weight-light mb-0">Web Developer</p>
			</div>
		</header>
	);
};
