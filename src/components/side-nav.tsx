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
		<div className='bg-[#F7F8FA] dark:bg-[#020817] md:h-screen grid'>
			<div className='grid justify-center py-5'>
				<Logo />
				<Nav
					links={[
						{
							icon: <BulkIcon />,
						},
						{
							icon: <TrendIcon />,
						},
						{
							icon: <UserIcon />,
						},
						{
							icon: <BoxIcon />,
						},
						{
							icon: <DiscountIcon />,
						},
						{
							icon: <InfoIcon />,
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
						},
						{
							icon: <SettingsIcon />,
						},
						{
							icon: <LogoutIcon />,
						},
					]}
				/>
			</div>
		</div>
	)
}
