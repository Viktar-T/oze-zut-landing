import Image from 'next/image';

export const metadata = {
	title: '6.1 Engine_bench-R121 – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Stanowisko testowe silnika do analizy wydajności i optymalizacji.',
};

export default function EngineBenchR121Page() {
	return (
		<article className="lab-article" aria-labelledby="equipment-heading">
			<header className="lab-header">
				<h1 id="equipment-heading">6.1 Engine_bench-R121</h1>
				<p>
					Stanowisko testowe i badawcze silnika do analizy wydajności i optymalizacji.
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
						<dd>Wyposażenie testowe silnika</dd>
					</div>
					<div>
						<dt>Konfiguracja:</dt>
						<dd>Stanowisko badawcze</dd>
					</div>
				</dl>
			</section>

			<section className="section" aria-labelledby="access-heading">
				<h2 id="access-heading">Dostęp</h2>
				<p>
					To stanowisko testowe silnika jest zaprojektowane do kompleksowego testowania wydajności, analizy efektywności i badań optymalizacyjnych różnych konfiguracji silników. System umożliwia szczegółowe monitorowanie parametrów silnika, emisji i charakterystyk wydajnościowych.
				</p>
			</section>

			<section className="section" aria-labelledby="images-heading">
				<h2 id="images-heading">Zdjęcia</h2>
				<div className="lab-images">
					<h3>Główny widok stanowiska</h3>
					<Image
						src="/labs/6.1.%20Engine_bench-R121/6.1.%20Engine_bench.jpg"
						alt="Stanowisko silnika"
						width={800}
						height={600}
						className="lab-image"
					/>
					
					<h3>Konfiguracja stanowiska i szczegóły</h3>
					<Image
						src="/labs/6.1.%20Engine_bench-R121/20250624_155623.jpg"
						alt="Konfiguracja stanowiska 1"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/6.1.%20Engine_bench-R121/20250624_155642.jpg"
						alt="Konfiguracja stanowiska 2"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/6.1.%20Engine_bench-R121/20250624_155712.jpg"
						alt="Konfiguracja stanowiska 3"
						width={800}
						height={600}
						className="lab-image"
					/>
				</div>
			</section>

			<section className="section" aria-labelledby="purpose-heading">
				<h2 id="purpose-heading">Cel</h2>
				<p>Stanowisko silnika jest używane do:</p>
				<ul>
					<li>Testowania wydajności różnych konfiguracji silników</li>
					<li>Analizy efektywności i optymalizacji</li>
					<li>Monitorowania i analizy emisji</li>
					<li>Badań zużycia paliwa</li>
					<li>Badań i rozwoju strategii optymalizacji silników</li>
					<li>Demonstracji edukacyjnych</li>
				</ul>
			</section>

			<section className="section" aria-labelledby="features-heading">
				<h2 id="features-heading">Funkcje</h2>
				<ul>
					<li>Kompleksowe możliwości testowania silników</li>
					<li>Monitorowanie parametrów w czasie rzeczywistym</li>
					<li>Wyposażenie do pomiaru emisji</li>
					<li>Zbieranie danych o wydajności</li>
					<li>Zastosowania edukacyjne i badawcze</li>
				</ul>
			</section>
		</article>
	);
}





