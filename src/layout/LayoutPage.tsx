import React from 'react';
import Footer from '@src/components/Footer/Footer';
import Header from '@src/components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function LayoutPage() {
	return (
		<div className="container-fuild">
			<Header />
			<main className="container my-4">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
