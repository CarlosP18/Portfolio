import React from "react";
import { Link } from "react-scroll";
import logo from "../../img/logo.png";
import resume from "../../img/CPCV.pdf";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
			<div className="container">
				<Link
					style={{ width: "35%" }}
					className="navbar-brand"
					offset={-70}
					smooth={true}
					duration={1500}
					to="header">
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
								offset={-70}
								activeClass="active"
								smooth={true}
								duration={1500}
								to="portfolio">
								Portfolio
							</Link>
						</li>
						<li className="nav-item mx-0 mx-lg-1">
							<Link
								className="nav-link py-3 px-0 px-lg-3 rounded "
								activeClass="active"
								smooth={true}
								offset={-70}
								spy={true}
								duration={1500}
								to="about">
								About Me
							</Link>
						</li>
						<li className="nav-link mx-0  mx-lg-1 ">
							<a
								className="btn btn-md btn-outline-light font-weight-bold"
								style={{ alignSelf: "center" }}
								href={resume}
								download="Carlos Plaza Resume">
								<i className="fas fa-download mr-2" />
								cv
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
