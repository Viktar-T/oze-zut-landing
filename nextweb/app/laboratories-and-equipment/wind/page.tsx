import Link from 'next/link';

export const metadata = {
	title: 'Systemy energii wiatrowej – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Turbiny wiatrowe do generacji energii wiatrowej i badań.',
};

export default function WindPage() {
	return (
		<>
			<article className="section" aria-labelledby="wind-heading">
				<h1 id="wind-heading">Systemy energii wiatrowej</h1>
				<p>
					Turbiny wiatrowe do generacji energii wiatrowej i badań.
				</p>
			</article>

			<section className="section" aria-labelledby="equipment-list-heading">
				<h2 id="equipment-list-heading">Lista sprzętu</h2>
				<div className="lab-grid">
					<Link className="lab-card" href="/laboratories-and-equipment/wind/2.1-wind-big-vertical-storage/">
						<h3>2.1 Wind-Big-Vertical-Storage</h3>
						<p>Duża turbina wiatrowa z pionową osią z zintegrowanym systemem magazynowania energii.</p>
					</Link>
					<Link className="lab-card" href="/laboratories-and-equipment/wind/2.2-solar-wind-hybrid-station/">
						<h3>2.2 Solar-Wind Hybrid Station</h3>
						<p>Hybrydowa stacja słoneczno-wiatrowa.</p>
					</Link>
				</div>
			</section>
		</>
	);
}




