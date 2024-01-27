import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'

export function UserNav() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className='relative h-12 w-fit border rounded-full bg-transparent'>
					<Avatar className='h-8 w-8'>
						<AvatarImage src='/avatars/01.png' alt='user avatar' />
						<AvatarFallback>JB</AvatarFallback>
					</Avatar>
					<DropdownMenuLabel className='font-normal'>
						<div className='flex flex-col space-y-1'>
							<p className='text-sm text-black dark:white'>Justin Bergson</p>
							<p className='text-xs text-muted-foreground'>justin@gmail.com</p>
						</div>
					</DropdownMenuLabel>
					<CaretDownIcon className='ml-auto h-8 w-8 shrink-0 text-black' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56' align='end' forceMount>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>Profile</DropdownMenuItem>

					<DropdownMenuItem>Settings</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Log out</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
