import Link from 'next/link';

export const metadata = {
	title: 'Kadra – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Poznaj kadrę Katedry Inżynierii Odnawialnych Źródeł Energii i jej obszary specjalizacji.',
};

const educators = [
	{
		name: 'dr hab. inż. Adam Koniuszy',
		title: 'Profesor ZUT',
		role: 'Kierownik katedry · badania nad biogazem i magazynowaniem energii',
		href: '/educators/dr-hab-inz-adam-koniuszy-kierownik/',
	},
	{
		name: 'dr inż. Aleksandra Zielińska',
		title: 'Adiunkt',
		role: 'Modelowanie systemów PV i integracja z magazynami energii',
		href: '#',
	},
	{
		name: 'dr inż. Krzysztof Wiśniewski',
		title: 'Adiunkt',
		role: 'Diagnostyka silników spalinowych i paliwa alternatywne',
		href: '#',
	},
	{
		name: 'mgr inż. Marta Lewandowska',
		title: 'Asystent',
		role: 'Koordynacja projektów edukacyjnych i Platformy Edu-Bad',
		href: '#',
	},
	{
		name: 'dr inż. Paweł Tomaszewski',
		title: 'Starszy wykładowca',
		role: 'Ekspertyzy dla przemysłu i termomodernizacja budynków',
		href: '#',
	},
];

export default function EducatorsPage() {
	return (
		<>
			<section className="section" aria-labelledby="staff-heading">
				<h1 id="staff-heading">Educators</h1>
				<p>
					Zespół tworzą badacze i praktycy łączący dydaktykę z realizacją innowacyjnych projektów. Poniższa lista
					zostanie rozszerzona o szczegółowe profile.
				</p>
			</section>

			<section className="section" aria-labelledby="team-heading">
				<h2 id="team-heading" className="sr-only">Zespół katedry</h2>
				<div className="card-grid" role="list">
					{educators.map((person) => (
						<article key={person.name} className="card" role="listitem">
							<h3>{person.name}</h3>
							<p className="card-meta">{person.title}</p>
							<p>{person.role}</p>
							<Link className="card-link" href={person.href}>Profil w przygotowaniu</Link>
						</article>
					))}
				</div>
			</section>
		</>
	);
}




