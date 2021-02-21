import React from "react";
import "../../styles/home.scss";
import { About } from "../component/about";
import { Header } from "../component/header";
import { Modals } from "../component/modals";
import { Porfolio } from "../component/porfolio";

export const Home = () => {
	return (
		<>
			<Header />
			<Porfolio />
			<About />
			<Modals />
		</>
	);
};
