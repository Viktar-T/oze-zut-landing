import Image from 'next/image';

export const metadata = {
	title: '5.3 Algae-outside – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Zewnętrzny system hodowli alg do badań w środowisku naturalnym.',
};

export default function AlgaeOutsidePage() {
	return (
		<article className="lab-article" aria-labelledby="equipment-heading">
			<header className="lab-header">
				<h1 id="equipment-heading">5.3 Algae-outside</h1>
				<p>
					Zewnętrzny system hodowli alg do badań w środowisku naturalnym.
				</p>
			</header>

			<section className="section" aria-labelledby="details-heading">
				<h2 id="details-heading" className="sr-only">Szczegóły</h2>
				<dl>
					<div>
						<dt>Typ:</dt>
						<dd>System algowy</dd>
					</div>
					<div>
						<dt>Konfiguracja:</dt>
						<dd>Hodowla zewnętrzna</dd>
					</div>
				</dl>
			</section>

			<section className="section" aria-labelledby="access-heading">
				<h2 id="access-heading">Dostęp</h2>
				<p>Dostęp przez sieć LAN ZUT.</p>
			</section>

			<section className="section" aria-labelledby="images-heading">
				<h2 id="images-heading">Zdjęcia</h2>
				<div className="lab-images">
					<h3>Widok systemu zewnętrznego</h3>
					<Image
						src="/labs/5.3.%20Algae-outside/5.3.%20Algae-outside.jpg"
						alt="Zewnętrzny system alg"
						width={800}
						height={600}
						className="lab-image"
					/>
				</div>
			</section>

			<section className="section" aria-labelledby="features-heading">
				<h2 id="features-heading">Funkcje</h2>
				<ul>
					<li>Hodowla alg</li>
					<li>Kontrolowane środowisko wzrostu</li>
					<li>Badania nad produkcją biopaliw</li>
					<li>Generacja biomasy</li>
					<li>Systemy monitorowania i kontroli</li>
					<li>Zastosowania edukacyjne i badawcze</li>
				</ul>
			</section>
		</article>
	);
}





