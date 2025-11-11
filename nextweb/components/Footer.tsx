import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container footer-inner">
				<p>Copyright © 2025 Katedra Inżynierii Odnawialnych Źródeł Energii</p>
				<p>Zachodniopomorski Uniwersytet Technologiczny w Szczecinie</p>
				<Link className="to-top" href="#top">Do góry</Link>
			</div>
		</footer>
	);
}


