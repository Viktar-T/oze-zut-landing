export const metadata = {
	title: 'Sponsorzy – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Partnerzy i sponsorzy wspierający inicjatywy Katedry Inżynierii Odnawialnych Źródeł Energii.',
};

export default function SponsorsPage() {
	return (
		<>
			<article className="section" aria-labelledby="sponsors-heading">
				<h1 id="sponsors-heading">Sponsorzy</h1>
				<p>
					Wsparcie finansowe i merytoryczne partnerów pozwala rozwijać infrastrukturę laboratoryjną, programy
					edukacyjne oraz projekty badawcze katedry.
				</p>
			</article>

			<section className="section" aria-labelledby="sponsor-list-heading">
				<h2 id="sponsor-list-heading" className="sr-only">Lista sponsorów i patronów</h2>
				<div className="card-grid card-grid--logos" role="list">
					<article className="card card--logo" role="listitem">
						<span>EnergoTech<br />Sp. z o.o.</span>
					</article>
					<article className="card card--logo" role="listitem">
						<span>ZUT Alumni Fund</span>
					</article>
					<article className="card card--logo" role="listitem">
						<span>Green Horizon<br />Foundation</span>
					</article>
					<article className="card card--logo" role="listitem">
						<span>Miejska Energetyka<br />Szczecińska</span>
					</article>
				</div>
			</section>

			<section className="section" aria-labelledby="support-heading">
				<h2 id="support-heading">Formy wsparcia</h2>
				<ul className="support-list">
					<li>Finansowanie projektów badawczych, stypendiów studenckich i wyjazdów konferencyjnych.</li>
					<li>Przekazywanie aparatury, materiałów oraz licencji na oprogramowanie specjalistyczne.</li>
					<li>Partnerstwa mentoringowe i udział ekspertów w zajęciach oraz warsztatach branżowych.</li>
				</ul>
			</section>
		</>
	);
}




