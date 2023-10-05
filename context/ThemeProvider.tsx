'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';

type ThemeContextType = {
	mode: string;
	setMode: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext({} as ThemeContextType);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [mode, setMode] = useState('light');

	const handleThemeChange = () => {
		if (mode === 'dark') {
			setMode('light');
			document.documentElement.classList.add('light');
		} else {
			setMode('dark');
			document.documentElement.classList.add('dark');
		}
	};

	useEffect(() => {
		handleThemeChange();
	}, [mode, setMode]);

	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
			{children}
		</ThemeContext.Provider>
	);
};

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}

export default ThemeProvider;
