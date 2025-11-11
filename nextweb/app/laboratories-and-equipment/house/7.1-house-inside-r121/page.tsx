export const metadata = {
	title: '7.1 House-inside-R121 – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'System automatyki domowej i monitoringu do badań nad technologią inteligentnego domu.',
};

export default function HouseInsidePage() {
	return (
		<article className="lab-article" aria-labelledby="equipment-heading">
			<header className="lab-header">
				<h1 id="equipment-heading">7.1 House-inside-R121</h1>
				<p>
					System automatyki domowej i monitoringu do badań nad technologią inteligentnego domu.
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
						<dd>System automatyki domowej</dd>
					</div>
					<div>
						<dt>Konfiguracja:</dt>
						<dd>Monitorowanie i kontrola wewnętrzna</dd>
					</div>
				</dl>
			</section>

			<section className="section" aria-labelledby="videos-heading">
				<h2 id="videos-heading">Wideo</h2>
				<div className="lab-images">
					<h3>Przegląd systemu domowego</h3>
					<video controls className="lab-video">
						<source src="/labs/7.1.%20House-inside-R121/20250624_155928.mp4" type="video/mp4" />
						Twoja przeglądarka nie obsługuje odtwarzania wideo.
					</video>
				</div>
			</section>
		</article>
	);
}





