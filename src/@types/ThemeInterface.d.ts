import {} from 'styled-components';
import type { ThemeType } from './ThemeType';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
