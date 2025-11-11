import Link from 'next/link';

export const metadata = {
	title: 'Stanowisko silnikowe – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Stanowiska do testowania silników i analizy ich parametrów.',
};

export default function EngineBenchPage() {
	return (
		<>
			<article className="section" aria-labelledby="engine-heading">
				<h1 id="engine-heading">Stanowisko silnikowe</h1>
				<p>
					Stanowiska do testowania silników i analizy ich parametrów.
				</p>
			</article>

			<section className="section" aria-labelledby="equipment-list-heading">
				<h2 id="equipment-list-heading">Lista sprzętu</h2>
				<div className="lab-grid">
					<Link className="lab-card" href="/laboratories-and-equipment/engine-bench/6.1-engine-bench-r121/">
						<h3>6.1 Engine_bench-R121</h3>
						<p>Stanowisko testowe silnika w pomieszczeniu R121.</p>
					</Link>
				</div>
			</section>
		</>
	);
}





