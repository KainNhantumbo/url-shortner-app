import { useState, useEffect } from 'react';

interface IProps {
	key: string;
	initialValue: string;
}

export default function useLocalStorage({ key, initialValue }: IProps) {
	const [value, setValue] = useState(() => {
		const jsonValue = localStorage.getItem(key);
		if (jsonValue) return JSON.parse(jsonValue);
		return initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
