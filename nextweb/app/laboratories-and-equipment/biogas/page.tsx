import Link from 'next/link';

export const metadata = {
	title: 'Systemy biogazowe – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Systemy produkcji i magazynowania biogazu do badań nad energią odnawialną.',
};

export default function BiogasPage() {
	return (
		<>
			<article className="section" aria-labelledby="biogas-heading">
				<h1 id="biogas-heading">Systemy biogazowe</h1>
				<p>
					Systemy produkcji i magazynowania biogazu do badań nad energią odnawialną.
				</p>
			</article>

			<section className="section" aria-labelledby="equipment-list-heading">
				<h2 id="equipment-list-heading">Lista sprzętu</h2>
				<div className="lab-grid">
					<Link className="lab-card" href="/laboratories-and-equipment/biogas/3.1-biogaz-kioze-small-plan/">
						<h3>3.1 Biogaz-KIOZE-small_plan</h3>
						<p>Małoskalowy system produkcji biogazu KIOZE do badań nad energią odnawialną.</p>
					</Link>
					<Link className="lab-card" href="/laboratories-and-equipment/biogas/3.2-biogaz-kioze-storage/">
						<h3>3.2 Biogaz-KIOZE-Storage</h3>
						<p>System magazynowania biogazu KIOZE.</p>
					</Link>
				</div>
			</section>
		</>
	);
}




