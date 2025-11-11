import Link from 'next/link';

export const metadata = {
	title: 'Systemy algowe – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Systemy hodowli i badań alg do produkcji biopaliw i biomasy.',
};

export default function AlgaePage() {
	return (
		<>
			<article className="section" aria-labelledby="algae-heading">
				<h1 id="algae-heading">Systemy algowe</h1>
				<p>
					Systemy hodowli i badań alg do produkcji biopaliw i biomasy.
				</p>
			</article>

			<section className="section" aria-labelledby="equipment-list-heading">
				<h2 id="equipment-list-heading">Lista sprzętu</h2>
				<div className="lab-grid">
					<Link className="lab-card" href="/laboratories-and-equipment/algae/5.1-algae-inside-farm-r121/">
						<h3>5.1 Algae-inside-farm-R121</h3>
						<p>System hodowli alg wewnętrznej w pomieszczeniu R121.</p>
					</Link>
					<Link className="lab-card" href="/laboratories-and-equipment/algae/5.2-algae-inside-tubes-r121/">
						<h3>5.2 Algae-inside-Tubes-R121</h3>
						<p>System hodowli alg w rurach wewnętrznych w pomieszczeniu R121.</p>
					</Link>
					<Link className="lab-card" href="/laboratories-and-equipment/algae/5.3-algae-outside/">
						<h3>5.3 Algae-outside</h3>
						<p>Zewnętrzny system hodowli alg.</p>
					</Link>
				</div>
			</section>
		</>
	);
}





