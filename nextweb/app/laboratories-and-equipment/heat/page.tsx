import Link from 'next/link';

export const metadata = {
	title: 'Systemy cieplne – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Systemy generacji i zarządzania ciepłem, w tym silniki Stirlinga i pompy ciepła.',
};

export default function HeatPage() {
	return (
		<>
			<article className="section" aria-labelledby="heat-heading">
				<h1 id="heat-heading">Systemy cieplne</h1>
				<p>
					Systemy generacji i zarządzania ciepłem, w tym silniki Stirlinga i pompy ciepła.
				</p>
			</article>

			<section className="section" aria-labelledby="equipment-list-heading">
				<h2 id="equipment-list-heading">Lista sprzętu</h2>
				<div className="lab-grid">
					<Link className="lab-card" href="/laboratories-and-equipment/heat/4.1-heat-sterling-storage/">
						<h3>4.1 Heat-Sterling-Storage</h3>
						<p>System cieplny z silnikiem Stirlinga i magazynem energii.</p>
					</Link>
					<Link className="lab-card" href="/laboratories-and-equipment/heat/4.2-heat-pump-conditioner/">
						<h3>4.2 Heat_Pump-Conditioner</h3>
						<p>Pompa ciepła z klimatyzatorem.</p>
					</Link>
				</div>
			</section>
		</>
	);
}




