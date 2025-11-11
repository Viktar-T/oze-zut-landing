import Link from 'next/link';

export const metadata = {
	title: 'Kontakty – Katedra Inżynierii Odnawialnych Źródeł Energii',
	description: 'Dane kontaktowe Katedry Inżynierii Odnawialnych Źródeł Energii na ZUT.',
};

export default function ContactsPage() {
	return (
		<>
			<article className="section" aria-labelledby="contacts-heading">
				<h1 id="contacts-heading">Contacts</h1>
				<p>
					Skontaktuj się z zespołem Katedry Inżynierii Odnawialnych Źródeł Energii, aby uzyskać informacje o
					współpracy, projektach lub studiach.
				</p>
			</article>

			<section className="section" aria-labelledby="contact-details-heading">
				<h2 id="contact-details-heading" className="sr-only">Dane kontaktowe</h2>
				<div className="contact-grid">
					<div className="contact-card">
						<h3>Katedra Inżynierii Odnawialnych Źródeł Energii</h3>
						<dl>
							<div>
								<dt>Email</dt>
								<dd><a href="mailto:oze@zut.edu.pl">oze@zut.edu.pl</a></dd>
							</div>
							<div>
								<dt>Telefon</dt>
								<dd><a href="tel:+48914294900">+48 91 429 49 00</a> (sekretariat)</dd>
							</div>
						</dl>
					</div>
					<div className="contact-card">
						<h3>Adres</h3>
						<address>
							Zachodniopomorski Uniwersytet Technologiczny w Szczecinie<br />
							Wydział Elektryczny<br />
							ul. Sikorskiego 37, 70-313 Szczecin
						</address>
					</div>
					<div className="contact-card">
						<h3>Godziny dostępności</h3>
						<ul>
							<li>Poniedziałek–Piątek: 8:00 – 15:00</li>
							<li>Spotkania indywidualne po wcześniejszym umówieniu</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}




