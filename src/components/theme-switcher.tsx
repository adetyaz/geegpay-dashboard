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
		<div className='theme-switcher'>
			<div className={`slider ${theme}`}></div>
			<button
				className={`theme-button ${theme === 'light' ? 'active' : ''}`}
				onClick={() => setTheme('light')}
			>
				🌞 Light
			</button>
			<button
				className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
				onClick={() => setTheme('dark')}
			>
				🌜 Dark
			</button>
		</div>
	)
}

export default ThemeSwitcher
