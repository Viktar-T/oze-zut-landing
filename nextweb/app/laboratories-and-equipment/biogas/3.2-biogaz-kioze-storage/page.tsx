import Image from 'next/image';

export const metadata = {
	title: '3.2 Biogaz-KIOZE-Storage – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'System magazynowania biogazu KIOZE do zarządzania i dystrybucji biogazu.',
};

export default function BiogasStoragePage() {
	return (
		<article className="lab-article" aria-labelledby="equipment-heading">
			<header className="lab-header">
				<h1 id="equipment-heading">3.2 Biogaz-KIOZE-Storage</h1>
				<p>
					System magazynowania biogazu KIOZE do zarządzania i dystrybucji biogazu.
				</p>
			</header>

			<section className="section" aria-labelledby="details-heading">
				<h2 id="details-heading" className="sr-only">Szczegóły</h2>
				<dl>
					<div>
						<dt>Typ:</dt>
						<dd>System biogazowy</dd>
					</div>
					<div>
						<dt>Konfiguracja:</dt>
						<dd>Obiekt magazynowania biogazu</dd>
					</div>
				</dl>
			</section>

			<section className="section" aria-labelledby="images-heading">
				<h2 id="images-heading">Zdjęcia</h2>
				<div className="lab-images">
					<h3>Widok systemu magazynu</h3>
					<Image
						src="/labs/3.2.%20Biogaz-KIOZE-Storage/3.2.%20Biogaz-KIOZE-Storage.jpg"
						alt="Magazyn biogazu KIOZE"
						width={800}
						height={600}
						className="lab-image"
					/>
				</div>
			</section>

			<section className="section" aria-labelledby="features-heading">
				<h2 id="features-heading">Funkcje</h2>
				<ul>
					<li>Pojemność magazynowania biogazu</li>
					<li>Integracja z systemem produkcji biogazu</li>
				</ul>
			</section>
		</article>
	);
}




