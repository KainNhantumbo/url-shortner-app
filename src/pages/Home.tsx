import { HomeContainer as Container } from '../styles/home';
import apiClient from '../service/api-client';
import { useState, useEffect } from 'react';
import backgroundImg from '../assets/images/op.jpg';
import { IoArrowForwardCircle, IoBalloon } from 'react-icons/all';

interface IUrls {
	id: string;
	longUrl: string;
	shortUrl: string;
	createdAt: string;
}

export default function Home(): JSX.Element {
	const [inputValue, setInputValue] = useState<string>('');
	const [urls, setUrls] = useState<IUrls[]>(() => {
		const jsonValue = JSON.parse(localStorage.getItem('urls') || `[]`);
		return jsonValue;
	});

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

	return (
		<Container>
			<header>
				<img src={backgroundImg} />
				<div className='intro'>
					<section className='logo'>
						<div>
							<IoBalloon/>
							<span>Url Shortner</span>
						</div>
					</section>
					<section>
						<p>Create click worthy links!</p>
					</section>
				</div>

				<div className='intro-complement'>
					<h2>Free url shortner</h2>
					<p>
						Unleash the power of the click using a simple, powerful and free url
						shortner.
					</p>
					<p>
						A service that takes long urls and squeezes them into fewer
						characters to make a link that is much easier to share to your
						friends.
					</p>
					<a href='#article'>
						<span>Get Started</span>
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
							<IoArrowForwardCircle/>
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
								<div className='actions'>
									<button onClick={() => addToClipboard(url.shortUrl)}>
										<span>Clear</span>
									</button>
									<button onClick={() => addToClipboard(url.shortUrl)}>
										<span>Copy to clipboard</span>
									</button>
								</div>
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
