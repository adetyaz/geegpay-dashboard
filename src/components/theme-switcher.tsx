import React, { useState, useEffect } from 'react'

const ThemeSwitcher = () => {
	const [theme, setTheme] = useState(
		window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	)

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}

		const themeChangeListener = (e: any) => {
			setTheme(e.matches ? 'dark' : 'light')
		}

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		mediaQuery.addEventListener('change', themeChangeListener)

		return () => {
			mediaQuery.removeEventListener('change', themeChangeListener)
		}
	}, [theme])

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<button onClick={toggleTheme}>
			{theme === 'light' ? '🌞' : '🌜'} {/* Replace with your icons */}
		</button>
	)
}

export default ThemeSwitcher
