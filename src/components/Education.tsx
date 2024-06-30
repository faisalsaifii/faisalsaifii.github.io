export default function Education() {
	const educations: Array<{
		degree: string
		insitution: string
		description: string
		link: string
		from: string
		to: string
	}> = [
		{
			degree: 'Bachelor of Technology (Computer Science)',
			insitution: 'Dr. APJ Abdul Kalam Technical University',
			description:
				'Specialization in Information Technology. Won Hack n Crack Hackathon with project DevMeet',
			link: 'https://ipec.org.in',
			from: 'September 2020',
			to: 'June 2024',
		},
		{
			degree: 'High School (Computer Science)',
			insitution: 'Bharti Public School',
			description:
				'Participated in various co-curricular activities like singing in zonal competitions. Won website development contest',
			link: 'https://bps.edu.in',
			from: 'April 2008',
			to: 'March 2020',
		},
	]
	return (
		<div className='flex flex-col gap-3'>
			<h2 className='font-bold text-5xl leading-relaxed'>Experience</h2>
			<div className='flex flex-col gap-6'>
				{educations.map(
					(
						{ degree, insitution, description, link, from, to },
						index
					) => (
						<div className='flex flex-col gap-2' key={index}>
							<div className='flex justify-between'>
								<a className='flex flex-col' href={link}>
									<span className='text-2xl font-semibold'>
										{degree}
									</span>
									<span className='font-light'>
										{insitution}
									</span>
								</a>
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
