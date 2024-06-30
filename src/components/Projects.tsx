export default function Projects() {
	const projects: Array<{
		name: string
		company: string
		description: string
		projectLink: string
		companyLink: string
		from: string
		to: string
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
		},
	]
	return (
		<div className='flex flex-col gap-3'>
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
						},
						index
					) => (
						<div className='flex flex-col gap-2' key={index}>
							<div className='flex justify-between'>
								<div className='flex flex-col'>
									<a
										href={projectLink}
										className='text-2xl font-semibold'
									>
										{name}
									</a>
									<a
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
							<p className='font-thin'>{description}</p>
						</div>
					)
				)}
			</div>
		</div>
	)
}
