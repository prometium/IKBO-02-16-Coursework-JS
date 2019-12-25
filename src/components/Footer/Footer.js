import React from 'react';

import './Footer.css';

const Footer = () => {
	return(
	<div>
		<footer className="footer is-primary">
			<div className="container">
			<div className="columns">
				<div className="column">
					<h1>Название компонента - Footer. Добавляет нижнюю часть страницы</h1>
						<h2>Если эта надпись видна, то компонент Footer функционирует правильно</h2>
				</div>
			</div>
			</div>
		</footer>
	</div>
	);
};

export default Footer;