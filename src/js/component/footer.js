import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer text-center">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 mb-5 mb-lg-0">
					<h4 className="text-uppercase mb-4">Location</h4>
					<p className="lead mb-0">Santiago, Chile</p>
				</div>

				<div className="col-lg-4 mb-5 mb-lg-0" />

				<div className="col-lg-4">
					<h4 className="text-uppercase mb-4">Around the Web</h4>
					<a
						className="btn btn-outline-light btn-social mx-1"
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/carlos-plaza-88b76976/">
						<i className="fab fa-fw fa-linkedin-in" />
					</a>
					<a
						className="btn btn-outline-light btn-social mx-1"
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/CarlosP18">
						<i className="fab fa-github" />
					</a>
				</div>
			</div>
		</div>
	</footer>
);
