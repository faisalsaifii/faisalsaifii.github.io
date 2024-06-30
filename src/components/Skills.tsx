export default function Skills() {
	const skills: Array<{ type: string; examples: string }> = [
		{
			type: 'Frontend (Web)',
			examples:
				'ReactJS, NextJS, Javascript, Typescript, HTML, CSS, Tailwind CSS, Figma',
		},
		{
			type: 'Backend',
			examples:
				'NodeJS, ExpressJS, Flask, REST APIs, Python, C++, Supabase, Firebase, Spring Boot',
		},
		{
			type: 'Mobile App Development (Android & iOS)',
			examples: 'React Native, Flutter',
		},
		{
			type: 'Devops',
			examples:
				'Docker, Nix, Github Actions, Git, Selenium, Bitbucket, Gitlabs, Github',
		},
		{ type: 'Database', examples: 'MongoDB, PostgreSQL, MySQL, Firestore' },
		{ type: 'Operating', examples: 'System: Linux, MacOS, Windows (WSL)' },
	]

	return (
		<div id='skills' className='flex flex-col gap-3'>
			<h2 className='font-bold text-5xl leading-relaxed'>
				Technical Skills
			</h2>
			{skills.map(({ type, examples }, index) => (
				<div className='flex flex-col' key={index}>
					<span className='font-semibold text-2xl'>{type}</span>
					<span>{examples}</span>
				</div>
			))}
		</div>
	)
}
