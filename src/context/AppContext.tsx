import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/lightTheme';
import { useState, useContext, createContext } from 'react';
import GlobalStylesheet from '../styles/common/global';

interface IProps {
	children: ReactNode;
}

interface IContextProps {}

const appContext = createContext<IContextProps>({});

export default function AppContext({ children }: IProps): JSX.Element {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStylesheet />
			<appContext.Provider value={{}}>{children}</appContext.Provider>;
		</ThemeProvider>
	);
}

export const useAppContext = (): IContextProps => {
	return useContext(appContext);
};
