import Image from 'next/image';

export const metadata = {
	title: '5.1 Algae-inside-farm-R121 – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Wewnętrzny system farmy alg do badań nad produkcją biopaliw i biomasy.',
};

export default function AlgaeFarmPage() {
	return (
		<article className="lab-article" aria-labelledby="equipment-heading">
			<header className="lab-header">
				<h1 id="equipment-heading">5.1 Algae-inside-farm-R121</h1>
				<p>
					Wewnętrzny system farmy alg do badań nad produkcją biopaliw i biomasy.
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
						<dd>Wewnętrzna farma alg</dd>
					</div>
				</dl>
			</section>

			<section className="section" aria-labelledby="access-heading">
				<h2 id="access-heading">Dostęp</h2>
				<p>
					<a href="http://212.14.35.209/algaeconnectclient/#!/monitor" target="_blank" rel="noopener noreferrer">
						http://212.14.35.209/algaeconnectclient/#!/monitor
					</a>
				</p>
			</section>

			<section className="section" aria-labelledby="images-heading">
				<h2 id="images-heading">Zdjęcia</h2>
				<div className="lab-images">
					<h3>Główny widok farmy</h3>
					<Image
						src="/labs/5.1.%20Algae-inside-farm-R121/5.1.%20Algae-inside.jpg"
						alt="Wewnętrzna farma alg"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/5.1.%20Algae-inside-farm-R121/image.png"
						alt="Schemat systemu"
						width={800}
						height={600}
						className="lab-image"
					/>
					
					<h3>Szczegóły farmy</h3>
					<Image
						src="/labs/5.1.%20Algae-inside-farm-R121/20250624_154754.jpg"
						alt="Szczegół farmy 1"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/5.1.%20Algae-inside-farm-R121/20250624_154805.jpg"
						alt="Szczegół farmy 2"
						width={800}
						height={600}
						className="lab-image"
					/>
				</div>
			</section>

			<section className="section" aria-labelledby="videos-heading">
				<h2 id="videos-heading">Wideo</h2>
				<div className="lab-images">
					<h3>Działanie farmy alg</h3>
					<video controls className="lab-video">
						<source src="/labs/5.1.%20Algae-inside-farm-R121/20250624_154815.mp4" type="video/mp4" />
						Twoja przeglądarka nie obsługuje odtwarzania wideo.
					</video>
				</div>
			</section>

			<section className="section" aria-labelledby="data-acquisition-heading">
				<h2 id="data-acquisition-heading">System pozyskiwania danych</h2>
				<h3>Sytuacja obecna</h3>
				<p>
					System jest już podłączony do małego komputera pokładowego. Komputer komunikuje się z sprzętem pomiarowym przez RS-485. Uruchamia własny interfejs oprogramowania, który wyświetla dane systemu na dedykowanym ekranie. Pełny dostęp do danych wymaga obecnie danych logowania (nazwa użytkownika i hasło nieznane).
				</p>
				<h3>Rekomendacje</h3>
				<ul>
					<li>Uzyskaj dane logowania do oprogramowania, aby wyświetlić parametry danych</li>
					<li>Po zalogowaniu dane mogą być eksportowalne lub przesyłane strumieniowo</li>
					<li>W razie potrzeby podłącz komputer do sieci LAN</li>
				</ul>
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




