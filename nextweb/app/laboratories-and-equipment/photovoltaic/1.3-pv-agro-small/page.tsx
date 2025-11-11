import Image from 'next/image';

export const metadata = {
	title: '1.3 PV-Agro-small – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Mała instalacja fotowoltaiczna rolnicza do zastosowań agrowoltaicznych.',
};

export default function PVAgroPage() {
	return (
		<article className="lab-article" aria-labelledby="equipment-heading">
			<header className="lab-header">
				<h1 id="equipment-heading">1.3 PV-Agro-small</h1>
				<p>
					Mała instalacja fotowoltaiczna rolnicza do zastosowań agrowoltaicznych.
				</p>
			</header>

			<section className="section" aria-labelledby="details-heading">
				<h2 id="details-heading" className="sr-only">Szczegóły</h2>
				<dl>
					<div>
						<dt>Typ:</dt>
						<dd>System fotowoltaiczny</dd>
					</div>
					<div>
						<dt>Konfiguracja:</dt>
						<dd>Instalacja rolnicza/agrowoltaiczna</dd>
					</div>
				</dl>
			</section>

			<section className="section" aria-labelledby="access-heading">
				<h2 id="access-heading">Dostęp</h2>
				<p>Brak informacji.</p>
			</section>

			<section className="section" aria-labelledby="images-heading">
				<h2 id="images-heading">Zdjęcia</h2>
				<div className="lab-images">
					<h3>Główny widok</h3>
					<Image
						src="/labs/1.3.%20PV-Agro-small/1.3.%20PV-Agro-small.jpg"
						alt="Instalacja PV rolnicza"
						width={800}
						height={600}
						className="lab-image"
					/>
				</div>
			</section>
		</article>
	);
}




