import React from "react";
import "../../styles/home.scss";
import { Header } from "../component/header";
import { Modals } from "../component/modals";
import { Porfolio } from "../component/porfolio";

export const Home = () => {
	return (
		<>
			<Header />
			<Porfolio />
			<Modals />
		</>
	);
};
