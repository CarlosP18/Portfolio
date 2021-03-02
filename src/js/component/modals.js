import React from "react";
import clean from "../../img/todoclean.gif";
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

export const Modals = () => {
	return (
		<>
			<div
				className="portfolio-modal modal fade"
				id="portfolioModal13"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal1Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal1Label">
											Todo Cleean
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-spray-can" />
											</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={clean} alt="" />
										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													BOOTSTRAP{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													REACTJS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													REACT ROUTER{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CONTEXT API{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													PYTHON{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													FLASK{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													MYSQL
												</span>
											</li>
											<li className="list-group-item ">
												<i className="fab fa-github mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> GitHub Repo: </span>
												<a
													style={{ color: "black" }}
													rel="noopener noreferrer"
													target="_blank"
													href="https://github.com/CarlosP18/Todo-Clean-Front-End">
													https://github.com/CarlosP18/Todo-Clean-Front-End
												</a>
												<span className="font-weight-bold" style={{ color: "rgb(26,188,156)" }}>
													/
												</span>{" "}
												<a
													style={{ color: "black" }}
													rel="noopener noreferrer"
													target="_blank"
													href="https://github.com/CarlosP18/Todo-Clean-Back-End">
													https://github.com/CarlosP18/Todo-Clean-Back-End
												</a>
											</li>
										</ul>

										<button className="btn btn-primary  mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="portfolio-modal modal fade"
				id="portfolioModal1"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal1Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal1Label">
											Star Wars Blog
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fab fa-jedi-order" />
											</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={starwars} alt="" />
										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													BOOTSTRAP{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													REACTJS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													REACT ROUTER{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CONTEXT API{" "}
												</span>
											</li>
											<li className="list-group-item ">
												<i className="fab fa-github mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> GitHub Repo: </span>
												<a
													style={{ color: "black" }}
													rel="noopener noreferrer"
													target="_blank"
													href="https://github.com/CarlosP18/startwars-blog-react.git">
													https://github.com/CarlosP18/startwars-blog-react.git
												</a>
											</li>
										</ul>

										<button className="btn btn-primary  mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="portfolio-modal modal fade"
				id="portfolioModal2"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal2Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal2Label">
											To-Do List
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-clipboard-list" />
											</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={todo} alt="" />

										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													BOOTSTRAP{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													REACTJS
												</span>
											</li>
											<li className="list-group-item ">
												<i className="fab fa-github mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> GitHub Repo: </span>
												<a
													style={{ color: "black" }}
													rel="noopener noreferrer"
													target="_blank"
													href="https://github.com/CarlosP18/to-do-list-react">
													https://github.com/CarlosP18/to-do-list-react
												</a>
											</li>
										</ul>
										<button className="btn btn-primary mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="portfolio-modal modal fade"
				id="portfolioModal3"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal3Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal3Label">
											Contact List
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-address-book" />
											</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={contact} alt="" />

										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													BOOTSTRAP{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													REACTJS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CONTEXT API{" "}
												</span>
											</li>
											<li className="list-group-item ">
												<i className="fab fa-github mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> GitHub Repo: </span>
												<a
													style={{ color: "black" }}
													rel="noopener noreferrer"
													target="_blank"
													href="https://github.com/CarlosP18/contact-list-react">
													https://github.com/CarlosP18/contact-list-react
												</a>
											</li>
										</ul>
										<button className="btn btn-primary mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="portfolio-modal modal fade"
				id="portfolioModal4"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal4Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal4Label">
											Tic Tac Toe
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="far fa-times-circle" />
											</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={tictac} alt="" />

										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													BOOTSTRAP{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													REACTJS
												</span>
											</li>
											<li className="list-group-item ">
												<i className="fab fa-github mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> GitHub Repo: </span>
												<a
													style={{ color: "black" }}
													rel="noopener noreferrer"
													target="_blank"
													href="https://github.com/CarlosP18/tictactoe-react">
													https://github.com/CarlosP18/tictactoe-react
												</a>
											</li>
										</ul>
										<button className="btn btn-primary mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="portfolio-modal modal fade"
				id="portfolioModal5"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal5Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal5Label">
											Music Player
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fab fa-spotify" />
											</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={music} alt="" />

										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													BOOTSTRAP{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													REACTJS
												</span>
											</li>
											<li className="list-group-item ">
												<i className="fab fa-github mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> GitHub Repo: </span>
												<a
													style={{ color: "black" }}
													rel="noopener noreferrer"
													target="_blank"
													href="https://github.com/CarlosP18/music-player-with-react">
													https://github.com/CarlosP18/music-player-with-react
												</a>
											</li>
										</ul>
										<button className="btn btn-primary mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="portfolio-modal modal fade"
				id="portfolioModal6"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal6Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal6Label">
											Card Generator with Bubble Sort
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">&#9824;</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={card} alt="" />

										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													BOOTSTRAP{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													jAVASCRIPT
												</span>
											</li>
											<li className="list-group-item ">
												<i className="fab fa-github mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> GitHub Repo: </span>
												<a
													style={{ color: "black" }}
													rel="noopener noreferrer"
													target="_blank"
													href="https://github.com/CarlosP18/bubble-sorting-card-generator">
													https://github.com/CarlosP18/bubble-sorting-card-generator
												</a>
											</li>
										</ul>
										<button className="btn btn-primary mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="portfolio-modal modal fade"
				id="portfolioModal7"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal7Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal1Label">
											Instagram-like Feed
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-star" />
											</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={feed} alt="" />

										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													BOOTSTRAP{" "}
												</span>
											</li>
											<li className="list-group-item ">
												<i className="fab fa-github mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> GitHub Repo: </span>
												<a
													style={{ color: "black" }}
													rel="noopener noreferrer"
													target="_blank"
													href="https://github.com/CarlosP18/The-Instagram-Photo-Feed">
													https://github.com/CarlosP18/The-Instagram-Photo-Feed
												</a>
											</li>
										</ul>
										<button className="btn btn-primary mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="portfolio-modal modal fade"
				id="portfolioModal8"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal8Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal2Label">
											Responsive Pricing Panel
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-star" />
											</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={pricing} alt="" />

										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
												</span>
											</li>
											<li className="list-group-item ">
												<i className="fab fa-github mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> GitHub Repo: </span>
												<a
													style={{ color: "black" }}
													rel="noopener noreferrer"
													target="_blank"
													href="https://github.com/CarlosP18/responsive-pricing-panel">
													https://github.com/CarlosP18/responsive-pricing-panel
												</a>
											</li>
										</ul>
										<button className="btn btn-primary mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="portfolio-modal modal fade"
				id="portfolioModal9"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal9Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal3Label">
											Responsive Home Page
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-star" />
											</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={candy} alt="" />

										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													BOOTSTRAP{" "}
												</span>
											</li>
											<li className="list-group-item ">
												<i className="fab fa-github mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> GitHub Repo: </span>
												<a
													style={{ color: "black" }}
													rel="noopener noreferrer"
													target="_blank"
													href="https://github.com/CarlosP18/responsive-home-page">
													https://github.com/CarlosP18/responsive-home-page
												</a>
											</li>
										</ul>
										<button className="btn btn-primary mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="portfolio-modal modal fade"
				id="portfolioModal10"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal10Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal4Label">
											Basic Home Page
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-star" />
											</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={page} alt="" />

										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													BOOTSTRAP{" "}
												</span>
											</li>
											<li className="list-group-item ">
												<i className="fab fa-github mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> GitHub Repo: </span>
												<a
													style={{ color: "black" }}
													rel="noopener noreferrer"
													target="_blank"
													href="https://github.com/CarlosP18/exercise-collaborative-html-website">
													https://github.com/CarlosP18/exercise-collaborative-html-website
												</a>
											</li>
										</ul>
										<button className="btn btn-primary mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="portfolio-modal modal fade"
				id="portfolioModal11"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal11Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal5Label">
											Login Form
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-star" />
											</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={login} alt="" />

										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													BOOTSTRAP{" "}
												</span>
											</li>
										</ul>
										<button className="btn btn-primary mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="portfolio-modal modal fade"
				id="portfolioModal12"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal12Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal6Label">
											Sign Up Form
										</h2>

										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-star" />
											</div>
											<div className="divider-custom-line" />
										</div>

										<img className="img-fluid rounded mb-5" src={signup} alt="" />

										<ul
											className="list-group list-group-flush text-center "
											style={{ color: "rgb(26,188,156)" }}>
											<li className="list-group-item">
												<i className="fas fa-code mr-2 font-weight-bold" />
												<span className="font-weight-bold mr-4"> Used Techs:</span>
												<span style={{ color: "black" }}>
													HTML5{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													CSS{" "}
													<span
														className="font-weight-bold"
														style={{ color: "rgb(26,188,156)" }}>
														/
													</span>{" "}
													BOOTSTRAP{" "}
												</span>
											</li>
										</ul>
										<button className="btn btn-primary mt-3" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
