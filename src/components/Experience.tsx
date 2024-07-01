export default function Experience() {
	const experiences: Array<{
		role: string
		company: string
		description: string
		link: string
		from: string
		to: string
		icon: string
	}> = [
		{
			role: 'Product Engineer',
			company: 'Juspay Technologies',
			description:
				'Technologies: Python, Flask, MySQL, PostgreSQL, Tailwind CSS, React, Haskell, Rescript, REST, CRUD. Worked as part of various teams to automate the process of integration by 70%. Juspay Genius: AI chatbot integrated in Slack aimed to resolve merchant queries. Onboarding Assistant: Interface for merchants to track their integration steps. Juspay Portal: Dashboard constituting of all that Juspay provides',
			link: 'https://juspay.in',
			from: 'July 2023',
			to: 'Present',
			icon: '/icons/juspay.svg',
		},
		{
			role: 'Full Stack Developer',
			company: 'Intech Circuits',
			description:
				'Technologies: NextJS, Typescript, Tailwind CSS, APIs, Supabase, Server Actions, HTML, CSS, JavaScript. Increased the company reach by 50% by developing a landing website. Developed a platform for customers to place orders online: Get Your PCB',
			link: 'https://www.intechcircuits.com',
			from: 'August 2022',
			to: 'January 2023',
			icon: '/icons/ic.png',
		},
		{
			role: 'Full Stack Developer',
			company: 'Freelancing',
			description: 'Developing backends and slack apps for clients',
			link: 'https://www.fiverr.com/faisalsaifii',
			from: 'September 2022',
			to: 'Present',
			icon: '/icons/fiverr.svg',
		},
	]
	return (
		<div id='experience' className='flex flex-col gap-3'>
			<h2 className='font-bold text-5xl leading-relaxed'>Experience</h2>
			<div className='flex flex-col gap-6'>
				{experiences.map(
					(
						{ role, company, description, link, from, to, icon },
						index
					) => (
						<div className='flex flex-col gap-2' key={index}>
							<div className='flex gap-1'>
								<img
									src={icon}
									className='aspect-square h-[4.5rem] w-[4.5rem] sm:h-12 sm:w-12 m-1 rounded-full'
								/>
								<div className='flex flex-col sm:flex-row w-full justify-between'>
									<a
										className='flex flex-col'
										href={link}
										target='_blank'
									>
										<span className='text-2xl font-semibold'>
											{role}
										</span>
										<span className='font-light'>
											{company}
										</span>
									</a>
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
