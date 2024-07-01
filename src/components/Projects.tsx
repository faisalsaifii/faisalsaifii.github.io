export default function Projects() {
	const projects: Array<{
		name: string
		company: string
		description: string
		projectLink: string
		companyLink: string
		from: string
		to: string
		icon: string
	}> = [
		{
			name: 'DevMeet',
			company: 'Inderprastha Engineering College',
			description:
				'Coding Interview Platform (Online Video Conferencing with Integrated Development Environment). Technologies: ReactJS, ExpressJS, NodeJS, Javascript, Tailwind CSS, Judge0, Monaco Editor',
			projectLink: 'https://developermeet.vercel.app',
			companyLink: 'https://www.ipec.org.in',
			from: 'November 2022',
			to: 'December 2022',
			icon: '/icons/devmeet.svg',
		},
		{
			name: 'Hungy',
			company: 'Inderprastha Engineering College',
			description:
				'Social Media & E-Commerce platform for foodies. Technologies used: ReactJS, ExpressJS, NodeJS, MongoDB, Javascript, CSS, Juspay',
			projectLink: 'https://www.hungy.tech',
			companyLink: 'https://www.ipec.org.in',
			from: 'September 2023',
			to: 'May 2024',
			icon: '/icons/hungy.svg',
		},
		{
			name: 'Pollify',
			company: 'Open Source',
			description:
				'Slack App with easy to create polls functionality (Built in a night). Technologies used: Flask, Python, Slack Bolt SDK, MongoDB',
			projectLink: 'https://www.hungy.tech',
			companyLink: 'https://www.ipec.org.in',
			from: 'October 2023',
			to: 'September 2023',
			icon: '/icons/pollify.svg',
		},
	]
	return (
		<div id='projects' className='flex flex-col gap-3'>
			<h2 className='font-bold text-5xl leading-relaxed'>Projects</h2>
			<div className='flex flex-col gap-6'>
				{projects.map(
					(
						{
							name,
							company,
							description,
							projectLink,
							companyLink,
							from,
							to,
							icon,
						},
						index
					) => (
						<div className='flex flex-col gap-2' key={index}>
							<div className='flex gap-2'>
								<img
									src={icon}
									className='aspect-square h-[4.5rem] w-[4.5rem] sm:h-12 sm:w-12 m-1 rounded-full'
								/>
								<div className='flex flex-col sm:flex-row justify-between w-full'>
									<div className='flex flex-col'>
										<a
											href={projectLink}
											className='text-2xl font-semibold'
											target='_blank'
										>
											{name}
										</a>
										<a
											target='_blank'
											href={companyLink}
											className='font-light'
										>
											{company}
										</a>
									</div>
									<span className='font-light'>
										{from} - {to}
									</span>
								</div>
							</div>
							<p className='font-thin'>{description}</p>
						</div>
					)
				)}
			</div>
		</div>
	)
}
