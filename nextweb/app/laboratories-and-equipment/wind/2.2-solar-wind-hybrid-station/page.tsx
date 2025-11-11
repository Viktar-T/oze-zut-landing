import Image from 'next/image';

export const metadata = {
	title: '2.2 Solar-Wind Hybrid Station – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Hybrydowa stacja słoneczno-wiatrowa łącząca możliwości energii słonecznej i wiatrowej.',
};

export default function SolarWindHybridPage() {
	return (
		<article className="lab-article" aria-labelledby="equipment-heading">
			<header className="lab-header">
				<h1 id="equipment-heading">2.2 Solar-Wind Hybrid Station</h1>
				<p>
					Hybrydowa stacja energetyczna łącząca możliwości energii słonecznej i wiatrowej do badań i edukacji.
				</p>
			</header>

			<section className="section" aria-labelledby="details-heading">
				<h2 id="details-heading" className="sr-only">Szczegóły</h2>
				<dl>
					<div>
						<dt>Typ:</dt>
						<dd>System hybrydowy</dd>
					</div>
					<div>
						<dt>Konfiguracja:</dt>
						<dd>Stacja hybrydowa słoneczno-wiatrowa</dd>
					</div>
				</dl>
			</section>

			<section className="section" aria-labelledby="data-acquisition-heading">
				<h2 id="data-acquisition-heading">System pozyskiwania danych</h2>
				<h3>Sytuacja obecna</h3>
				<p>
					Komputer PC jest już bezpośrednio podłączony do systemu stacji hybrydowej. Ten komputer zbiera i przechowuje dane przy użyciu oprogramowania dostarczonego przez producenta. Instrukcja systemu wskazuje opcjonalną integrację LAN do transferu danych przez sieć.
				</p>
				<h3>Rekomendacje</h3>
				<ul>
					<li>Podłącz komputer bezpośrednio do lokalnej sieci LAN</li>
					<li>Skonfiguruj udostępnianie plików/danych lub bezpośrednie przesyłanie strumieniowe z kontrolera hybrydowego, jeśli jest obsługiwane</li>
				</ul>
			</section>

			<section className="section" aria-labelledby="images-heading">
				<h2 id="images-heading">Zdjęcia</h2>
				<div className="lab-images">
					<h3>Główny widok</h3>
					<Image
						src="/labs/2.2.%20Solar-Wind%20Hybrid%20Station/2.2.%20Wind-Small-Horizontal.jpg"
						alt="Stacja hybrydowa słoneczno-wiatrowa"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/2.2.%20Solar-Wind%20Hybrid%20Station/image.png"
						alt="Schemat systemu"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/2.2.%20Solar-Wind%20Hybrid%20Station/PV-roof.jpg"
						alt="Dach PV"
						width={800}
						height={600}
						className="lab-image"
					/>
					
					<h3>Zdjęcia instalacji i szczegóły</h3>
					<Image
						src="/labs/2.2.%20Solar-Wind%20Hybrid%20Station/20250624_162026.jpg"
						alt="Zdjęcie instalacji 1"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/2.2.%20Solar-Wind%20Hybrid%20Station/20250624_162040.jpg"
						alt="Zdjęcie instalacji 2"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/2.2.%20Solar-Wind%20Hybrid%20Station/20250624_162056.jpg"
						alt="Zdjęcie instalacji 3"
						width={800}
						height={600}
						className="lab-image"
					/>
				</div>
			</section>

			<section className="section" aria-labelledby="features-heading">
				<h2 id="features-heading">Funkcje</h2>
				<ul>
					<li>Hybrydowa generacja energii słonecznej i wiatrowej</li>
					<li>System pozyskiwania danych oparty na PC</li>
					<li>Oprogramowanie monitorujące dostarczone przez producenta</li>
					<li>Małoskalowa instalacja</li>
					<li>System demonstracyjny edukacyjny</li>
				</ul>
			</section>
		</article>
	);
}




