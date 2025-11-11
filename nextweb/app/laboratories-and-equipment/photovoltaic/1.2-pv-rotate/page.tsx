import Image from 'next/image';

export const metadata = {
	title: '1.2 PV-Rotate – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'System obrotowych paneli fotowoltaicznych do śledzenia słońca i optymalizacji.',
};

export default function PVRotatePage() {
	return (
		<article className="lab-article" aria-labelledby="equipment-heading">
			<header className="lab-header">
				<h1 id="equipment-heading">1.2 PV-Rotate</h1>
				<p>
					System obrotowych paneli fotowoltaicznych do śledzenia słońca i optymalizacji.
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
						<dd>System obrotowy/śledzący</dd>
					</div>
				</dl>
			</section>

			<section className="section" aria-labelledby="description-heading">
				<h2 id="description-heading">Opis</h2>
				<p>Dodać PLC i podłączyć później.</p>
			</section>

			<section className="section" aria-labelledby="images-heading">
				<h2 id="images-heading">Zdjęcia</h2>
				<div className="lab-images">
					<h3>Główny widok</h3>
					<Image
						src="/labs/1.2.%20PV-Rotate/1.2.1.%20PV-Rotate.jpg"
						alt="System obrotowy PV"
						width={800}
						height={600}
						className="lab-image"
					/>
				</div>
			</section>

			<section className="section" aria-labelledby="features-heading">
				<h2 id="features-heading">Funkcje</h2>
				<ul>
					<li>Mechanizm śledzenia słońca</li>
					<li>System obrotowych paneli</li>
				</ul>
			</section>
		</article>
	);
}




