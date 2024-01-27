import { cn } from '@/lib/utils'
import { Nav } from '@/components/nav'
import { Logo } from '@/components/logo'
import {
	BulkIcon,
	TrendIcon,
	UserIcon,
	BoxIcon,
	DiscountIcon,
	InfoIcon,
	LoginIcon,
	SettingsIcon,
	LogoutIcon,
} from '.'
import ThemeSwitcher from './theme-switcher'

export const SideNav = () => {
	return (
		<div className='bg-[#F7F8FA] dark:bg-[#020817] md:h-screen flex flex-col justify-between items-center '>
			<div className=' py-5'>
				<Logo />
				<Nav
					links={[
						{
							icon: <BulkIcon />,
							path: '/',
						},
						{
							icon: <TrendIcon />,
							path: '/trend',
						},
						{
							icon: <UserIcon />,
							path: '/profile',
						},
						{
							icon: <BoxIcon />,
							path: '/inventory',
						},
						{
							icon: <DiscountIcon />,
							path: '/discount',
						},
						{
							icon: <InfoIcon />,
							path: '/info',
						},
					]}
				/>
			</div>

			{/* <ThemeSwitcher /> */}
			<div className='place-content-end'>
				<Nav
					links={[
						{
							icon: <LoginIcon />,
							path: '/login',
						},
						{
							icon: <SettingsIcon />,
							path: '/settings',
						},
						{
							icon: <LogoutIcon />,
							path: '/logout',
						},
					]}
				/>
			</div>
		</div>
	)
}
