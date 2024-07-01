export default function Header() {
	const socials: Array<{
		text: string
		icon: string
		link: string
	}> = [
		{
			text: 'Linkedin',
			icon: 'linkedin.svg',
			link: 'https://www.linkedin.com/in/faisalsaifii',
		},
		{
			text: 'Github',
			icon: 'github.svg',
			link: 'https://github.com/faisalsaifii',
		},
		{
			text: 'Twitter',
			icon: 'twitter.svg',
			link: 'https://x.com/faisalsaifiii',
		},
		{
			text: 'Email',
			icon: 'email.svg',
			link: 'mailto:the.m.faisal.s@gmail.com',
		},
	]
	return (
		<div className='flex flex-col-reverse sm:flex-row justify-between gap-4'>
			<div className='flex flex-col gap-2'>
				<h1 className='font-black text-6xl sm:text-7xl'>
					Faisal Saifi
				</h1>
				<p className='font-light text-lg'>
					Full Stack Software developer with experience in front-end,
					back-end development with system and UI design, experienced
					in leading cross functional teams
				</p>
				<div className='flex gap-3'>
					{socials.map(({ text, icon, link }, index) => (
						<a href={link} key={index} target='_blank'>
							<img width={38} src={`/icons/${icon}`} alt={text} />
						</a>
					))}
				</div>
			</div>
			<img
				className='rounded-full aspect-square h-48 w-48'
				src='/profile.jpeg'
			/>
		</div>
	)
}
