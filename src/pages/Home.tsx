import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { HomeContainer as Container } from '../styles/home';
import apiClient from '../service/api-client';
import moment from 'moment';
import Footer from '../components/Footer';
import backgroundImg from '../assets/images/op.jpg';
import {
	FaCat,
	FaPaperPlane,
	IoBalloon,
	IoCopy,
	IoLayers,
	IoTrash,
} from 'react-icons/all';

interface IUrls {
	id: string;
	longUrl: string;
	shortUrl: string;
	createdAt: string;
}

export default function Home(): JSX.Element {
	const [inputValue, setInputValue] = useState<string>('');
	const [urls, setUrls] = useState<IUrls[]>([]);

	async function getShortUrl(longUrl: string): Promise<void> {
		try {
			const { data } = await apiClient({
				url: '/urls/shorten',
				method: 'post',
				data: { url: longUrl },
			});
			setUrls((prevData) => handleData(prevData, data));
		} catch (err) {
			console.error(err);
		}
	}

	function handleData(prevData: IUrls[], data: any): IUrls[] {
		const exists = prevData.some((value) =>
			value.id === data._id ? true : false
		);

		if (!exists) {
			const newUrlData: IUrls = {
				id: data._id,
				shortUrl: data.shortUrl,
				createdAt: data.createdAt,
				longUrl: data.fullUrl,
			};

			prevData.push(newUrlData);
			localStorage.setItem('urls', JSON.stringify(prevData));
			return prevData;
		}
		return prevData;
	}

	async function addToClipboard(data: string): Promise<void> {
		try {
			const clipboard = navigator.clipboard;
			await clipboard.writeText(data);
		} catch (err) {
			console.error(err);
		}
	}

	function formatDate(date: string): string {
		return moment(date).calendar();
	}

	function deleteUrl(urlId: string): void {
		const otherUrls = urls.filter((url) => {
			if (url.id != urlId) return url;
		});
		setUrls(otherUrls);
		localStorage.setItem('urls', JSON.stringify(otherUrls));
		console.log(otherUrls);
	}

	useEffect(() => {
		const savedUrls = JSON.parse(localStorage.getItem('urls') || `[]`);
		setUrls(savedUrls);
	}, []);

	return (
		<Container>
			<header>
				<img src={backgroundImg} />
				<div className='intro'>
					<section className='logo'>
						<div>
							<IoBalloon />
							<span>Url Shortner</span>
						</div>
					</section>
					<section>
						<p>Create click worthy links!</p>
					</section>
				</div>

				<div className='intro-complement'>
					<h2>Free Url Shortner</h2>

					<TypeAnimation
						wrapper='p'
						speed={50}
						sequence={[
							'Unleash the power of the click using a simple, powerful and free url shortner.',
						]}
					/>
					<p>
						A service that takes long urls and squeezes them into fewer
						characters to make a link that is much easier to share to your
						friends.
					</p>

					<a href='#article'>
						<span>Get Started!</span>
					</a>
				</div>
			</header>
			<main>
				<article id='article'>
					<form onSubmit={(e) => e.preventDefault()}>
						<input
							type='text'
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							placeholder={'Type your long url here'}
						/>

						<button
							onClick={() => {
								if (!inputValue) return;
								getShortUrl(inputValue);
								setInputValue('');
							}}
						>
							<FaPaperPlane />
							<span>Shorten</span>
						</button>
					</form>
					<section className='urls-wrapper'>
						<h2>
							<FaCat />
							<span>Shortned Urls</span>
						</h2>

						<section className='urls-container'>
							{urls
								.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
								.map((url) => (
									<section key={url.id} id={url.id} className='url'>
										<div className='links'>
											<a
												href={url.longUrl}
												target={'_blank'}
												rel={'noreferrer noopener'}
												className='long-url'
												title={url.longUrl}
											>
												<span>{url.longUrl}</span>
											</a>
											<a
												href={url.shortUrl}
												target={'_blank'}
												rel={'noreferrer noopener'}
												className='short-url'
											>
												<span>{url.shortUrl}</span>
											</a>
										</div>
										<div className='actions-container'>
											<div className='date'>
												<span>{formatDate(url.createdAt)}</span>
											</div>
											<div className='buttons'>
												<button onClick={() => addToClipboard(url.shortUrl)}>
													<IoCopy />
													<span>Copy to clipboard</span>
												</button>
												<button onClick={() => deleteUrl(url.id)}>
													<IoTrash />
													<span>Clear</span>
												</button>
											</div>
										</div>
									</section>
								))}
							{urls.length < 1 && (
								<section className='no-urls'>
									<div>
										<IoLayers />
										<h3>Your shortned urls will be placed here</h3>
									</div>
								</section>
							)}
						</section>
					</section>
				</article>
			</main>

			<Footer />
		</Container>
	);
}
