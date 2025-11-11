import Link from 'next/link';

export default function Home() {
	return (
		<>
			<section className="hero" aria-labelledby="hero-heading">
				<div className="hero-content">
					<h1 id="hero-heading">Study and Research Renewable Energy</h1>
					<p>
						Edukacja i badania w obszarze inżynierii odnawialnych źródeł energii na ZUT – od laboratoriów
						inżynierskich po projekty realizowane z partnerami przemysłowymi.
					</p>
					<div className="hero-actions">
						<a className="button" href="https://platform.oze.zut.edu.pl">Poznaj Platformę EduBad</a>
					</div>
				</div>
				<div className="hero-visual" aria-hidden="true">
					<div className="hero-placeholder">
						<span>Placeholder<br />visual</span>
					</div>
				</div>
			</section>

			<section className="section" aria-labelledby="about-heading">
				<div className="section-intro">
					<h2 id="about-heading">About us</h2>
					<p>
						Katedra Inżynierii Odnawialnych Źródeł Energii skupia naukowców i praktyków, którzy rozwijają technologie
						wytwarzania, magazynowania i efektywnego wykorzystania energii ze źródeł odnawialnych.
					</p>
					<p>
						Naszą misją jest łączenie edukacji, badań i współpracy z otoczeniem gospodarczym, aby wspierać zieloną
						transformację oraz kształcić inżynierów gotowych do pracy w dynamicznie rozwijającej się branży OZE.
					</p>
				</div>
			</section>

			<section className="section" aria-labelledby="quick-links-heading">
				<div className="section-intro">
					<h2 id="quick-links-heading">Odkryj nasze zasoby</h2>
					<p>Przeglądaj najważniejsze obszary działalności katedry i poznaj dostępne możliwości.</p>
				</div>
				<div className="quick-links" role="list">
					<Link className="quick-link" role="listitem" href="/laboratories-and-equipment/">
						<h3>Laboratoria</h3>
						<p>Poznawaj zaplecze badawcze i aparaturę wykorzystywaną w projektach OZE.</p>
					</Link>
					<Link className="quick-link" role="listitem" href="/projects/">
						<h3>Projekty</h3>
						<p>Dowiedz się, nad jakimi tematami badawczymi i wdrożeniowymi pracujemy.</p>
					</Link>
					<Link className="quick-link" role="listitem" href="/colaboration/">
						<h3>Współpraca</h3>
						<p>Sprawdź, jak możemy połączyć siły przy projektach, ekspertyzach i szkoleniach.</p>
					</Link>
					<Link className="quick-link" role="listitem" href="/educators/">
						<h3>Kadra</h3>
						<p>Poznaj wykładowców, badaczy i opiekunów specjalności związanych z OZE.</p>
					</Link>
					<Link className="quick-link" role="listitem" href="/sponsors/">
						<h3>Sponsorzy</h3>
						<p>Zobacz partnerów i instytucje wspierające rozwój naszych inicjatyw.</p>
					</Link>
					<Link className="quick-link" role="listitem" href="/contacts/">
						<h3>Kontakty</h3>
						<p>Skontaktuj się z nami, aby uzyskać informacje lub rozpocząć współpracę.</p>
					</Link>
				</div>
			</section>
		</>
	);
}


