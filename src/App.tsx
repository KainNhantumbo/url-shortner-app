import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));

const loaderStyles: CSSModuleClasses = {
	display: 'grid',
	placeItems: 'center',
	placeContent: 'center',
	fontWeight: '600',
	fontSize: '1.8rem',
	with: '100vw',
	height: '100vh',
};

export default function App(): JSX.Element {
	return (
		<>
			<Suspense
				fallback={
					<section style={loaderStyles}>
						<div>
							<span>Loading... Please wait.</span>
						</div>
					</section>
				}
			>
				<Home />
			</Suspense>
		</>
	);
}
