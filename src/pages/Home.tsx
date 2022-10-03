import { HomeContainer as Container } from '../styles/home';
import { useAppContext } from '../context/AppContext';

export default function Home(): JSX.Element {
	const { urls, addToClipboard } = useAppContext();
	return (
		<Container>
			<header>
				<div className='intro'>
					<section>
						<div>
							<span>Url Shortner</span>
						</div>
					</section>
					<section>
						<p>Create click worthy links!</p>
					</section>
				</div>

				<div className='intro-complement'>
					<>Free url shortner</>
					<p>
						Unleash the power of the click using a simple, powerful and free url
						shortner.
					</p>
					<button>
						<span>Get Started</span>
					</button>
				</div>
			</header>
			<main>
				<article>
					<form>
						<div>
							<label htmlFor='long-url'>
								<span>Your long url</span>
							</label>
							<input type="text" id='long-url' onChange={(e)=>{}} />
						</div>
						<button type='submit'>
							<span>Shorten</span>
						</button>
					</form>
					<section className='urls-container'>
						{urls.map((url) => (
							<section key={url.id} id={url.id}>
								<div className='urls'>
									<div className='long-url'>
										<span>{url.longUrl}</span>
									</div>
									<div className='short-url'>
										<span>{url.shortUrl}</span>
									</div>
								</div>
								<button onClick={() => addToClipboard(url.shortUrl)}>
									<span>Copy</span>
								</button>
							</section>
						))}
					</section>
				</article>
			</main>
			<footer>
				<div>
					Copyright &copy; 2022 <i>Kain Nhantumbo</i>
				</div>
				<div>All Rights Reserved.</div>
			</footer>
		</Container>
	);
}
