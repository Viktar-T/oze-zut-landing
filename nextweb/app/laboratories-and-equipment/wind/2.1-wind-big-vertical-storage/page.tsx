import Image from 'next/image';

export const metadata = {
	title: '2.1 Wind-Big-Vertical-Storage – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Duża turbina wiatrowa z pionową osią z zintegrowanym systemem magazynowania energii.',
};

export default function WindBigVerticalPage() {
	return (
		<article className="lab-article" aria-labelledby="equipment-heading">
			<header className="lab-header">
				<h1 id="equipment-heading">2.1 Wind-Big-Vertical-Storage</h1>
				<p>
					Duża turbina wiatrowa z pionową osią z zintegrowanym systemem magazynowania energii.
				</p>
			</header>

			<section className="section" aria-labelledby="details-heading">
				<h2 id="details-heading" className="sr-only">Szczegóły</h2>
				<dl>
					<div>
						<dt>Typ:</dt>
						<dd>System energii wiatrowej</dd>
					</div>
					<div>
						<dt>Konfiguracja:</dt>
						<dd>Turbina wiatrowa z pionową osią z magazynem</dd>
					</div>
				</dl>
			</section>

			<section className="section" aria-labelledby="access-heading">
				<h2 id="access-heading">Dostęp</h2>
				<p>W trakcie konserwacji.</p>
			</section>

			<section className="section" aria-labelledby="images-heading">
				<h2 id="images-heading">Zdjęcia</h2>
				<div className="lab-images">
					<h3>Główne komponenty systemu</h3>
					<Image
						src="/labs/2.1.%20Wind-Big-Vertical-Storage/2.1.1.%20Wind-Big-Vertical.jpg"
						alt="Główny widok turbiny wiatrowej"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/2.1.%20Wind-Big-Vertical-Storage/2.1.2.%20Wind-Big-Vertical-inverter.jpg"
						alt="System falownika"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/2.1.%20Wind-Big-Vertical-Storage/2.1.3.%20Wind-Big-Vertical-inverter-storage.jpg"
						alt="System falownika i magazynu"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/2.1.%20Wind-Big-Vertical-Storage/2.1.3.1.%20Wind-Big-Vertical-storage.jpg"
						alt="Widok systemu magazynu 1"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/2.1.%20Wind-Big-Vertical-Storage/2.1.3.2.%20Wind-Big-Vertical-storage.jpg"
						alt="Widok systemu magazynu 2"
						width={800}
						height={600}
						className="lab-image"
					/>
					
					<h3>Zdjęcia instalacji</h3>
					<Image
						src="/labs/2.1.%20Wind-Big-Vertical-Storage/20250624_161459.jpg"
						alt="Zdjęcie instalacji 1"
						width={800}
						height={600}
						className="lab-image"
					/>
					<Image
						src="/labs/2.1.%20Wind-Big-Vertical-Storage/20250624_161509.jpg"
						alt="Zdjęcie instalacji 2"
						width={800}
						height={600}
						className="lab-image"
					/>
				</div>
			</section>

			<section className="section" aria-labelledby="features-heading">
				<h2 id="features-heading">Funkcje</h2>
				<ul>
					<li>Duża turbina wiatrowa z pionową osią</li>
					<li>Zintegrowany system magazynowania energii</li>
				</ul>
			</section>
		</article>
	);
}




