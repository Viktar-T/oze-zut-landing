import Link from 'next/link';

export const metadata = {
	title: 'Systemy fotowoltaiczne (PV) – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Instalacje fotowoltaiczne do generacji energii słonecznej i badań.',
};

export default function PhotovoltaicPage() {
	return (
		<>
			<article className="section" aria-labelledby="pv-heading">
				<h1 id="pv-heading">Systemy fotowoltaiczne (PV)</h1>
				<p>
					Instalacje fotowoltaiczne do generacji energii słonecznej i badań.
				</p>
			</article>

			<section className="section" aria-labelledby="equipment-list-heading">
				<h2 id="equipment-list-heading">Lista sprzętu</h2>
				<div className="lab-grid">
					<Link className="lab-card" href="/laboratories-and-equipment/photovoltaic/1.1-pv-hulajnogi-outside-r06/">
						<h3>1.1 PV-Hulajnogi-Outside-R06</h3>
						<p>Zewnętrzna instalacja fotowoltaiczna do generacji energii słonecznej i monitoringu.</p>
					</Link>
					<Link className="lab-card" href="/laboratories-and-equipment/photovoltaic/1.2-pv-rotate/">
						<h3>1.2 PV-Rotate</h3>
						<p>System obrotowych paneli fotowoltaicznych do śledzenia słońca i optymalizacji.</p>
					</Link>
					<Link className="lab-card" href="/laboratories-and-equipment/photovoltaic/1.3-pv-agro-small/">
						<h3>1.3 PV-Agro-small</h3>
						<p>Mała instalacja fotowoltaiczna rolnicza do zastosowań agrowoltaicznych.</p>
					</Link>
				</div>
			</section>
		</>
	);
}




