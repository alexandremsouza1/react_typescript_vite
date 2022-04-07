import React, { Suspense } from 'react';
import RootLayout from './layout/RootLayout';
import RenderRouter from './routes';
import { Helmet } from 'react-helmet-async';
import { configApp } from './config/config';
import { LoadingPage } from './components/Loading/Loading';
import { Toaster } from 'react-hot-toast';
import ScrollTopWhenChangeUrl from './components/ScrollTopWhenChangeUrl';
function App() {
	return (
		<Suspense fallback={<LoadingPage />}>
			<Helmet
				defaultTitle={configApp.APP_NAME}
				defer={false}
				encodeSpecialCharacters
				htmlAttributes={{ lang: 'pt-br' }}
				titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
				titleTemplate={`%s | ${name}`}
			>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
					crossOrigin="anonymous"
				/>
			</Helmet>

			<ScrollTopWhenChangeUrl>
				<RootLayout>
					<Toaster />
					<RenderRouter />
				</RootLayout>
			</ScrollTopWhenChangeUrl>
		</Suspense>
	);
}

export default App;
