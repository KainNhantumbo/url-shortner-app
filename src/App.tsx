import { lazy, Suspense } from 'react';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));

export default function App(): JSX.Element {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Home />
			</Suspense>
		</>
	);
}
