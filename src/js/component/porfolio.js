import React from "react";
import starwars from "../../img/starwars.gif";
import contact from "../../img/contactlist.gif";
import tictac from "../../img/tictactoe.gif";
import music from "../../img/musicplayer.gif";
import card from "../../img/card.gif";
import todo from "../../img/todo.gif";
import feed from "../../img/igfeed.gif";
import login from "../../img/login.jpg";
import pricing from "../../img/pricing.gif";
import candy from "../../img/candy.gif";
import page from "../../img/onepage.gif";
import signup from "../../img/signup.jpg";

export const Porfolio = () => {
	return (
		<section className="page-section portfolio" id="portfolio">
			<div className="container">
				<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

				<div className="divider-custom">
					<div className="divider-custom-line" />
					<div className="divider-custom-icon">
						<i className="fab fa-react" />
					</div>
					<div className="divider-custom-line" />
				</div>
				<h3 className=" text-center text-uppercase text-secondary mb-5">Vanilla JS and ReactJS</h3>
				<div className="row justify-content-center">
					<div className="col-md-6 col-lg-4 mb-5">
						<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center text-white">
									<i className="fas fa-plus fa-3x" />
								</div>
							</div>
							<img className="img-fluid" src={starwars} alt="" />
						</div>
					</div>

					<div className="col-md-6 col-lg-4 mb-5">
						<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center text-white">
									<i className="fas fa-plus fa-3x" />
								</div>
							</div>
							<img className="img-fluid" src={todo} alt="" />
						</div>
					</div>

					<div className="col-md-6 col-lg-4 mb-5">
						<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center text-white">
									<i className="fas fa-plus fa-3x" />
								</div>
							</div>
							<img className="img-fluid" src={contact} alt="" />
						</div>
					</div>

					<div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
						<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center text-white">
									<i className="fas fa-plus fa-3x" />
								</div>
							</div>
							<img className="img-fluid" src={tictac} alt="" />
						</div>
					</div>

					<div className="col-md-6 col-lg-4 mb-5 mb-md-0">
						<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center text-white">
									<i className="fas fa-plus fa-3x" />
								</div>
							</div>
							<img className="img-fluid" src={music} alt="" />
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center text-white">
									<i className="fas fa-plus fa-3x" />
								</div>
							</div>
							<img className="img-fluid" src={card} alt="" />
						</div>
					</div>
				</div>
				<h3 className=" text-center text-uppercase text-secondary my-5">Basic HTML, CSS and Bootstrap</h3>
				<div className="row justify-content-center">
					<div className="col-md-6 col-lg-4 mb-5">
						<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal7">
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center text-white">
									<i className="fas fa-plus fa-3x" />
								</div>
							</div>
							<img className="img-fluid" src={feed} alt="" />
						</div>
					</div>

					<div className="col-md-6 col-lg-4 mb-5">
						<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal8">
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center text-white">
									<i className="fas fa-plus fa-3x" />
								</div>
							</div>
							<img className="img-fluid" src={pricing} alt="" />
						</div>
					</div>

					<div className="col-md-6 col-lg-4 mb-5">
						<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal9">
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center text-white">
									<i className="fas fa-plus fa-3x" />
								</div>
							</div>
							<img className="img-fluid" src={candy} alt="" />
						</div>
					</div>

					<div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
						<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal10">
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center text-white">
									<i className="fas fa-plus fa-3x" />
								</div>
							</div>
							<img className="img-fluid" src={page} alt="" />
						</div>
					</div>

					<div className="col-md-6 col-lg-4 mb-5 mb-md-0">
						<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal11">
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center text-white">
									<i className="fas fa-plus fa-3x" />
								</div>
							</div>
							<img className="img-fluid" src={login} alt="" />
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal12">
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center text-white">
									<i className="fas fa-plus fa-3x" />
								</div>
							</div>
							<img className="img-fluid" src={signup} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
