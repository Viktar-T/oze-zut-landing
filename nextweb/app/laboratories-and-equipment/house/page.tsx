import Link from 'next/link';

export const metadata = {
	title: 'Systemy domowe – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Zintegrowane systemy energetyczne dla budynków.',
};

export default function HousePage() {
	return (
		<>
			<article className="section" aria-labelledby="house-heading">
				<h1 id="house-heading">Systemy domowe</h1>
				<p>
					Zintegrowane systemy energetyczne dla budynków.
				</p>
			</article>

			<section className="section" aria-labelledby="equipment-list-heading">
				<h2 id="equipment-list-heading">Lista sprzętu</h2>
				<div className="lab-grid">
					<Link className="lab-card" href="/laboratories-and-equipment/house/7.1-house-inside-r121/">
						<h3>7.1 House-inside-R121</h3>
						<p>System domowy wewnętrzny w pomieszczeniu R121.</p>
					</Link>
				</div>
			</section>
		</>
	);
}





