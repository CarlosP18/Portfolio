import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
			<div className="container">
				<Link
					style={{ width: "35%" }}
					className="navbar-brand"
					to="header"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<img className="img-fluid w-75" src={logo} alt="" />
				</Link>

				<button
					className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white "
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<i className="fas fa-bars" />
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item mx-0 mx-lg-1">
							<Link
								className="nav-link py-3 px-0 px-lg-3 rounded "
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								to="portfolio">
								Portfolio
							</Link>
						</li>
						<li className="nav-item mx-0 mx-lg-1">
							<Link
								className="nav-link py-3 px-0 px-lg-3 rounded "
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								to="about">
								About
							</Link>
						</li>
						<li className="nav-item mx-0 mx-lg-1">
							<Link
								className="nav-link py-3 px-0 px-lg-3 rounded "
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								to="">
								CV
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
