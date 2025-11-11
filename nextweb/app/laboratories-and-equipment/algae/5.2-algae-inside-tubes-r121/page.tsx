import Image from 'next/image';

export const metadata = {
	title: '5.2 Algae-inside-Tubes-R121 – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Wewnętrzny system hodowli alg w rurach do zaawansowanych badań nad algami.',
};

export default function AlgaeTubesPage() {
	return (
		<article className="lab-article" aria-labelledby="equipment-heading">
			<header className="lab-header">
				<h1 id="equipment-heading">5.2 Algae-inside-Tubes-R121</h1>
				<p>
					Wewnętrzny system hodowli alg w rurach do zaawansowanych badań nad algami.
				</p>
			</header>

			<section className="section" aria-labelledby="details-heading">
				<h2 id="details-heading" className="sr-only">Szczegóły</h2>
				<dl>
					<div>
						<dt>Lokalizacja:</dt>
						<dd>Pomieszczenie</dd>
					</div>
					<div>
						<dt>Typ:</dt>
						<dd>System algowy</dd>
					</div>
					<div>
						<dt>Konfiguracja:</dt>
						<dd>System rurowy wewnętrzny</dd>
					</div>
				</dl>
			</section>

			<section className="section" aria-labelledby="description-heading">
				<h2 id="description-heading">Opis</h2>
				<p>
					Ten wewnętrzny system hodowli alg w rurach wykorzystuje specjalistyczny projekt oparty na rurach do optymalnego wzrostu i zbioru alg. System jest zaprojektowany do badań nad efektywnymi metodami hodowli alg i produkcją biomasy o wysokiej gęstości.
				</p>
			</section>

			<section className="section" aria-labelledby="images-heading">
				<h2 id="images-heading">Zdjęcia</h2>
				<div className="lab-images">
					<h3>Widok systemu</h3>
					<Image
						src="/labs/5.2.%20Algae-inside-Tubes-R121/5.2.%20Algae-inside-Tubes-R121.jpg"
						alt="System rurowy alg"
						width={800}
						height={600}
						className="lab-image"
					/>
				</div>
			</section>

			<section className="section" aria-labelledby="videos-heading">
				<h2 id="videos-heading">Wideo</h2>
				<div className="lab-images">
					<h3>Działanie systemu rurowego</h3>
					<video controls className="lab-video">
						<source src="/labs/5.2.%20Algae-inside-Tubes-R121/20250624_154837.mp4" type="video/mp4" />
						Twoja przeglądarka nie obsługuje odtwarzania wideo.
					</video>
				</div>
			</section>

			<section className="section" aria-labelledby="features-heading">
				<h2 id="features-heading">Funkcje</h2>
				<ul>
					<li>System hodowli oparty na rurach</li>
					<li>Zastosowania badawcze i rozwojowe</li>
				</ul>
			</section>
		</article>
	);
}





