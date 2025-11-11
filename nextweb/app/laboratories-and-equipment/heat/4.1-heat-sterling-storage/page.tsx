import Image from 'next/image';

export const metadata = {
	title: '4.1 Heat-Sterling-Storage – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'System generacji ciepła z silnikiem Stirlinga z zintegrowanym magazynem energii.',
};

export default function HeatSterlingPage() {
	return (
		<article className="lab-article" aria-labelledby="equipment-heading">
			<header className="lab-header">
				<h1 id="equipment-heading">4.1 Heat-Sterling-Storage</h1>
				<p>
					System generacji ciepła z silnikiem Stirlinga z zintegrowanym magazynem energii.
				</p>
			</header>

			<section className="section" aria-labelledby="details-heading">
				<h2 id="details-heading" className="sr-only">Szczegóły</h2>
				<dl>
					<div>
						<dt>Typ:</dt>
						<dd>System cieplny</dd>
					</div>
					<div>
						<dt>Konfiguracja:</dt>
						<dd>Silnik Stirlinga z magazynem</dd>
					</div>
				</dl>
			</section>

			<section className="section" aria-labelledby="access-heading">
				<h2 id="access-heading">Dostęp</h2>
				<ul>
					<li><a href="http://212.14.34.4/#" target="_blank" rel="noopener noreferrer">http://212.14.34.4/#</a></li>
					<li><a href="http://212.14.34.5/#" target="_blank" rel="noopener noreferrer">http://212.14.34.5/#</a></li>
				</ul>
			</section>

			<section className="section" aria-labelledby="images-heading">
				<h2 id="images-heading">Zdjęcia</h2>
				<div className="lab-images">
					<h3>Widok systemu</h3>
					<Image
						src="/labs/4.1.%20Heat-Sterling-Storage/4.1.%20Heat-Sterling-Storage.jpg"
						alt="Silnik Stirlinga z magazynem"
						width={800}
						height={600}
						className="lab-image"
					/>
				</div>
			</section>

			<section className="section" aria-labelledby="features-heading">
				<h2 id="features-heading">Funkcje</h2>
				<ul>
					<li>Technologia silnika Stirlinga</li>
					<li>Konwersja ciepła na energię</li>
					<li>Zintegrowany magazyn energii</li>
					<li>Badania efektywności termicznej</li>
					<li>System demonstracyjny edukacyjny</li>
				</ul>
			</section>
		</article>
	);
}




