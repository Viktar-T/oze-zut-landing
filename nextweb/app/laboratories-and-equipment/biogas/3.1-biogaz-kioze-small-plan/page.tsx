import Image from 'next/image';

export const metadata = {
	title: '3.1 Biogaz-KIOZE-small_plan – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Małoskalowy system produkcji biogazu KIOZE do badań nad energią odnawialną.',
};

export default function BiogasKIOZEPage() {
	return (
		<article className="lab-article" aria-labelledby="equipment-heading">
			<header className="lab-header">
				<h1 id="equipment-heading">3.1 Biogaz-KIOZE-small_plan</h1>
				<p>
					Małoskalowy system produkcji biogazu KIOZE do badań nad energią odnawialną.
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
						<dd>Małoskalowa instalacja produkcji biogazu</dd>
					</div>
				</dl>
			</section>

			<section className="section" aria-labelledby="access-heading">
				<h2 id="access-heading">Dostęp</h2>
				<p>RS 485.</p>
			</section>

			<section className="section" aria-labelledby="images-heading">
				<h2 id="images-heading">Zdjęcia</h2>
				<div className="lab-images">
					<h3>Główny widok systemu</h3>
					<Image
						src="/labs/3.1.%20Biogaz-KIOZE-small_plan/3.1.%20Biogaz-KIOZE.jpg"
						alt="System biogazowy KIOZE"
						width={800}
						height={600}
						className="lab-image"
					/>
					
					<h3>Komponenty systemu i szczegóły</h3>
					<Image
						src="/labs/3.1.%20Biogaz-KIOZE-small_plan/20250624_154915.jpg"
						alt="Komponent systemu 1"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/3.1.%20Biogaz-KIOZE-small_plan/20250624_154918.jpg"
						alt="Komponent systemu 2"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/3.1.%20Biogaz-KIOZE-small_plan/20250624_154922.jpg"
						alt="Komponent systemu 3"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/3.1.%20Biogaz-KIOZE-small_plan/20250624_155010.jpg"
						alt="Komponent systemu 4"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/3.1.%20Biogaz-KIOZE-small_plan/20250624_155424.jpg"
						alt="Komponent systemu 5"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/3.1.%20Biogaz-KIOZE-small_plan/20250624_155433.jpg"
						alt="Komponent systemu 6"
						width={800}
						height={600}
						className="lab-image"
					/>
				</div>
			</section>

			<section className="section" aria-labelledby="data-acquisition-heading">
				<h2 id="data-acquisition-heading">System pozyskiwania danych</h2>
				<h3>Sytuacja obecna</h3>
				<p>
					Przetestowano port Ethernet znajdujący się zewnętrznie na szafie sprzętowej. Skanowanie sieci nie ujawniło aktywnego IP, co sugeruje:
				</p>
				<ul>
					<li>Port może nie być podłączony wewnętrznie</li>
					<li>Kontroler używa RS-485 lub innej wewnętrznej magistrali komunikacyjnej zamiast Ethernet</li>
					<li>System jest statycznie skonfigurowany z nieznanym adresem IP</li>
				</ul>
				<p>
					Z przodu znajduje się port USB, który jest najwyraźniej używany tylko do serwisowania.
				</p>
				<h3>Ograniczenia</h3>
				<p>
					Okablowanie systemu i architektura komunikacyjna są niejasne z powodu braku dokumentacji. Wewnętrzny kontroler, czujniki i jednostka wyświetlająca są prawdopodobnie połączone przez RS-485 lub inny standard magistrali polowej, ale nie można tego potwierdzić bez dostępu do wnętrza stacji.
				</p>
				<h3>Rekomendacje</h3>
				<ul>
					<li>Otwórz obudowę sterownika, aby prześledzić okablowanie komunikacyjne. Zidentyfikuj, czy czujniki/wyświetlacze łączą się przez:
						<ul>
							<li>Magistralę RS-485</li>
							<li>Ethernet / TCP</li>
							<li>Własny interfejs szeregowy</li>
						</ul>
					</li>
					<li>Po zidentyfikowaniu użyj RS-485 do lokalnego handlera danych lub bezpośredniej łączności LAN, jeśli jest dostępna.</li>
				</ul>
			</section>

			<section className="section" aria-labelledby="features-heading">
				<h2 id="features-heading">Funkcje</h2>
				<ul>
					<li>Małoskalowa produkcja biogazu</li>
					<li>Zastosowania edukacyjne i badawcze</li>
				</ul>
			</section>
		</article>
	);
}




