export const metadata = {
	title: 'Projects – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Poznaj projekty badawcze i edukacyjne prowadzone przez Katedrę Inżynierii Odnawialnych Źródeł Energii.',
};

export default function ProjectsPage() {
	return (
		<>
			<article className="section" aria-labelledby="projects-heading">
				<h1 id="projects-heading">Projects</h1>
				<p>
					Katedra rozwija inicjatywy łączące badania naukowe i praktyczne wdrożenia, wspierając transformację
					energetyczną oraz rozwój kompetencji studentów i partnerów.
				</p>
			</article>

			<section className="section" aria-labelledby="research-projects-heading">
				<h2 id="research-projects-heading">Research initiatives</h2>
				<div className="card-grid" role="list">
					<article className="card" role="listitem">
						<h3>Hybrid Energy Storage</h3>
						<p>
							Badania nad magazynowaniem energii w układach hybrydowych łączących ogniwa litowo-jonowe,
							superkondensatory i zasobniki ciepła.
						</p>
					</article>
					<article className="card" role="listitem">
						<h3>Zero-Emission Heating</h3>
						<p>
							Projekt analizujący efektywność pomp ciepła i kotłów niskoemisyjnych w warunkach klimatu morskiego
							regionu zachodniopomorskiego.
						</p>
					</article>
					<article className="card" role="listitem">
						<h3>Wind &amp; PV Synergy</h3>
						<p>
							Optymalizacja współpracy turbin wiatrowych i instalacji fotowoltaicznych w mikrosieciach
							uczelnianych i przemysłowych.
						</p>
					</article>
				</div>
			</section>

			<section className="section" aria-labelledby="educational-projects-heading">
				<h2 id="educational-projects-heading">Educational &amp; outreach projects</h2>
				<div className="card-grid" role="list">
					<article className="card" role="listitem">
						<h3>Platforma Edu-Bad</h3>
						<p>
							Cyfrowa platforma wspierająca kształcenie projektowe i wymianę doświadczeń pomiędzy studentami,
							mentorami oraz partnerami branżowymi.
						</p>
					</article>
					<article className="card" role="listitem">
						<h3>Renewable Energy Academy</h3>
						<p>
							Program warsztatów i laboratoriów specjalistycznych dla studentów oraz uczniów szkół średnich
							zainteresowanych technologiami OZE.
						</p>
					</article>
					<article className="card" role="listitem">
						<h3>Industry Innovation Labs</h3>
						<p>
							Wspólne projekty z przedsiębiorstwami energetycznymi, koncentrujące się na prototypowaniu rozwiązań
							niskoemisyjnych.
						</p>
					</article>
				</div>
			</section>
		</>
	);
}




