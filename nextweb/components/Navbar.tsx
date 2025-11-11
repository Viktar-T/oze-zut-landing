'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const equipmentCategories = [
	{ href: '/laboratories-and-equipment/', label: 'Przegląd laboratoriów i sprzętu' },
	{ href: '/laboratories-and-equipment/photovoltaic/', label: 'Photovoltaic (PV) Systems' },
	{ href: '/laboratories-and-equipment/wind/', label: 'Wind Energy Systems' },
	{ href: '/laboratories-and-equipment/biogas/', label: 'Biogas Systems' },
	{ href: '/laboratories-and-equipment/heat/', label: 'Heat Systems' },
	{ href: '/laboratories-and-equipment/algae/', label: 'Algae Systems' },
	{ href: '/laboratories-and-equipment/engine-bench/', label: 'Engine Bench' },
	{ href: '/laboratories-and-equipment/house/', label: 'House Systems' },
];

export default function Navbar() {
	const [navOpen, setNavOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const closeDropdown = () => {
		setDropdownOpen(false);
	};

	const closeNavMenu = () => {
		setNavOpen(false);
		closeDropdown();
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			const dropdown = document.querySelector('[data-dropdown]');
			if (dropdown && !dropdown.contains(target)) {
				closeDropdown();
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeDropdown();
				closeNavMenu();
			}
		};

		window.addEventListener('click', handleClickOutside);
		window.addEventListener('keydown', handleEscape);

		return () => {
			window.removeEventListener('click', handleClickOutside);
			window.removeEventListener('keydown', handleEscape);
		};
	}, []);

	return (
		<header id="top" className="site-header">
			<div className="container header-inner">
				<Link className="brand" href="/">Katedra Inżynierii Odnawialnych Źródeł Energii</Link>
				<button
					className="nav-toggle"
					type="button"
					onClick={() => setNavOpen(!navOpen)}
					aria-expanded={navOpen}
					aria-controls="primary-navigation"
				>
					Menu
				</button>
				<nav
					id="primary-navigation"
					className="nav-menu"
					data-open={navOpen.toString()}
					aria-label="Główna nawigacja"
				>
					<ul className="nav-list">
						<li><Link href="/" onClick={closeNavMenu}>Strona główna</Link></li>
						<li className="nav-item--dropdown" data-dropdown data-open={dropdownOpen.toString()}>
							<button
								className="nav-link--toggle"
								type="button"
								onClick={() => setDropdownOpen(!dropdownOpen)}
								aria-expanded={dropdownOpen}
							>
								Laboratoria i sprzęt
								<span aria-hidden="true">▾</span>
							</button>
							<ul
								className="nav-submenu"
								data-dropdown-menu
							>
								{equipmentCategories.map((category) => (
									<li key={category.href}>
										<Link href={category.href} onClick={closeNavMenu}>{category.label}</Link>
									</li>
								))}
							</ul>
						</li>
						<li><Link href="/projects/" onClick={closeNavMenu}>Projekty</Link></li>
						<li><Link href="/colaboration/" onClick={closeNavMenu}>Współpraca</Link></li>
						<li><Link href="/educators/" onClick={closeNavMenu}>Kadra</Link></li>
						<li><Link href="/sponsors/" onClick={closeNavMenu}>Sponsorzy</Link></li>
						<li><Link href="/contacts/" onClick={closeNavMenu}>Kontakty</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

