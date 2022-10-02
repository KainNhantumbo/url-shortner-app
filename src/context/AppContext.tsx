import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { useState, useContext, createContext, useEffect } from 'react';

interface IProps {
	children: ReactNode;
}

interface IContextProps {}

const appContext = createContext<IContextProps>({});

export default function AppContext({ children }: IProps): JSX.Element {
	return (
		<ThemeProvider theme={{}}>
			<appContext.Provider value={{}}>{children}</appContext.Provider>;
		</ThemeProvider>
	);
}

export function useAppContext(): IContextProps {
	return useContext(appContext);
}
