import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/lightTheme';
import { useState, useContext, createContext, useEffect } from 'react';
import GlobalStylesheet from '../styles/common/global';

interface IUrls {
	id: string;
	longUrl: string;
	shortUrl: string;
	createdAt: string;
}
interface IProps {
	children: ReactNode;
}

interface IContextProps {
	urls: IUrls[];
	addToClipboard: (data: string) => Promise<void>;
}

const appContext = createContext<IContextProps>({
	urls: [],
	addToClipboard: async () => {},
});

export default function AppContext({ children }: IProps): JSX.Element {
	const [urls, setUrls] = useState<IUrls[]>(() => {
		const jsonValue = JSON.parse(localStorage.getItem('urls') || `{"urls":[]}`);
		return [
			{
				id: 'sdfsdfsdf',
				createdAt: '2022-10-02T16:44:16.756Z',
				longUrl: 'https://www.digistore24.com/redir/283755/kaynee-tech/',
				shortUrl: 'https://bit.ly/3RGYMbN',
			},
			{
				id: 'sdfsdfssdfdf',
				createdAt: '2022-10-02T16:44:16.756Z',
				longUrl: 'https://www.google.com/redir/283755/kaynee-tech/',
				shortUrl: 'https://bit.ly/3RGfgtYMbN',
			},
		];
	});

	useEffect(() => {
		localStorage.setItem('urls', JSON.stringify(urls));
	}, [urls]);

	async function addToClipboard(data: string): Promise<void> {
		try {
			const clipboard = navigator.clipboard;
			await clipboard.writeText(data);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStylesheet />
			<appContext.Provider value={{ urls, addToClipboard }}>
				{children}
			</appContext.Provider>
		</ThemeProvider>
	);
}

export const useAppContext = (): IContextProps => {
	return useContext(appContext);
};
