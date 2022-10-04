import { CSSProperties } from 'react';

const loaderStyles: CSSProperties = {
	display: 'grid',
	placeItems: 'center',
	placeContent: 'center',
	fontWeight: '600',
	fontSize: '1.8rem',
	width: '100vw',
	height: '100vh',
};

const Loader = (): JSX.Element => (
	<section style={loaderStyles}>
		<div>
			<span>Loading... Please wait.</span>
		</div>
	</section>
);

export default Loader;
