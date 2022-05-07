import React, { useState, useEffect } from "react";

const Home = () => {
	const [infoNasa, setInfoNasa] = useState({});
	const [loading, setLoading] = useState(false);

	const callNasaAPI = async () => {
		setLoading(true);
		const URL =
			"https://api.nasa.gov/planetary/apod?api_key=0ZRI0gKrfzrXNO82ZIOD2lwOwkYMjteJE6tmKtEK";
		const resp = await fetch(URL);
		const data = await resp.json();
		const { copyright, date, explanation, title, url } = data;
		const newNasaInfo = {
			copyright,
			date,
			explanation,
			title,
			url,
		};
		setInfoNasa(newNasaInfo);
		setLoading(false);
	};

	useEffect(() => {
		callNasaAPI();
	}, []);

	return (
		<div className="container">
			<div className="card card-style mt-4">
				<img className="card-img-top" src={infoNasa.url} alt={infoNasa.title} />
				<figcaption>{infoNasa.title}</figcaption>
				<div className="card-body">
					<p className="card-text">
						<a
							href="https://apod.nasa.gov/apod/archivepix.html"
							target="_blank"
							rel="noopener noreferrer"
						>
							Discover the cosmos!{" "}
						</a>
						Each day a different image or photograph of our fascinating universe
						is featured, along with a brief explanation written by a
						professional astronomer.
					</p>
					<h5 className="card-title">{infoNasa.date}</h5>

					<p className="card-text">Explanation: {infoNasa.explanation}</p>
					<p className="card-text bg-dark text-light">
						Image Credit & Copiright: {infoNasa.copyright}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
