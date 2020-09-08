import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import fetch from "../utilities/fetch";
import findComponent from "../utilities/findComponent";

export default function Index() {
	const [json, setJson] = useState([]);
	useEffect(() => fetch('/api/home', setJson), [])
	return (
		<div>
			<Head>
				<title>Coaching Mind</title>
			</Head>
			<Nav />
			{
			json.length > 1 ? 
				json.map(({ component, props }, index) => {
					const Component = findComponent(component);
					return (
						<Component key={index} {...props}/>
					)
				})
					: <div style={{height: "90vh"}}></div>
				}
			<Footer/>
		</div>
	);
}
