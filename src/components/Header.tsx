export default function Header() {
	const socials: Array<{ text: string; icon: string; link: string }> = [
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
		<div className='flex justify-between'>
			<div className='flex flex-col gap-2'>
				<h1 className='font-black text-7xl'>Faisal Saifi</h1>
				<p className='font-light text-lg'>
					Full Stack Software developer with experience in front-end,
					back-end development with system and UI design, experienced
					in leading cross functional teams
				</p>
				<div className='flex gap-2'>
					{socials.map(({ text, icon, link }, index) => (
						<a href={link} key={index}>
							<img width={30} src={`/icons/${icon}`} alt={text} />
						</a>
					))}
				</div>
			</div>
			<img
				className='rounded-full aspect-square h-40 w-40'
				src='/profile.jpeg'
			/>
		</div>
	)
}
