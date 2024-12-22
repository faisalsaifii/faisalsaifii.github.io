type resumeType = {
	name: string
	email: string
	experience: experience[]
	education: education[]
	projects: {
		name: string
		company: string
		description: string
		projectLink: string
		companyLink: string
		from: string
		to: string
		icon: string
	}[]
	skills: {
		name: string
		icon: string
	}[]
	socials: social[]
}

type education = {
	degree: string
	institution: string
	description: string
	link: string
	from: string
	to: string
}

type experience = {
	role: string
	company: string
	description: string
	link: string
	from: string
	to: string
	icon: string
}

type social = {
	text: string
	icon: string
	link: string
	handle?: string
}

export const resume: resumeType = {
	name: 'Faisal',
	email: 'the.m.faisal.s@gmail.com',
	experience: [
		{
			role: 'Product Engineer',
			company: 'Juspay Technologies',
			description: `
				Technologies: Python, Flask, MySQL, PostgreSQL, Tailwind CSS, React, Haskell, Rescript, REST, CRUD
				Worked as part of various teams to automate the process of integration by 70%
				Juspay Genius: AI chatbot integrated in Slack aimed to resolve merchant queries
				Onboarding Assistant: Interface for merchants to track their integration steps
				Juspay Portal: Dashboard constituting of all that Juspay provides
			`,
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
		{
			role: 'Full Stack Developer',
			company: 'Open Source',
			description: `
			Supabase: Easy to use Backend as a Service
			Juspay Remote Development: Deploy to host machine via SSH with NixOS
			`,
			link: 'https://github.com/faisalsaifii',
			from: 'August 2022',
			to: 'Present',
			icon: '/icons/skills/github-white.svg',
		},
	],
	education: [
		{
			degree: 'Bachelor of Technology (Computer Science)',
			institution: 'Dr. APJ Abdul Kalam Technical University',
			description:
				'Specialization in Information Technology. Won Hack n Crack Hackathon with project DevMeet',
			link: 'https://ipec.org.in',
			from: 'September 2020',
			to: 'June 2024',
		},
		{
			degree: 'High School (Computer Science)',
			institution: 'Bharti Public School',
			description: `
				Participated in various co-curricular activities like singing in zonal competitions
				Won website development contest
				88% in 10th & 75% in 12th standard
				`,
			link: 'https://bps.edu.in',
			from: 'April 2008',
			to: 'March 2020',
		},
	],
	projects: [
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
	],
	skills: [
		{
			name: 'Javascript',
			icon: '/icons/skills/javascript.svg',
		},
		{
			name: 'Haskell',
			icon: '/icons/skills/haskell.svg',
		},
		{
			name: 'MongoDB',
			icon: '/icons/skills/mongodb.svg',
		},
		{
			name: 'MySQL',
			icon: '/icons/skills/mysql.svg',
		},
		{
			name: 'NodeJS',
			icon: '/icons/skills/nodejs.svg',
		},
		{
			name: 'Docker',
			icon: '/icons/skills/docker.svg',
		},
		{
			name: 'HTML',
			icon: '/icons/skills/html.svg',
		},
		{
			name: 'CSS',
			icon: '/icons/skills/css.svg',
		},
		{
			name: 'Rescript',
			icon: '/icons/skills/rescript.svg',
		},
		{
			name: 'Git',
			icon: '/icons/skills/git.svg',
		},
		{
			name: 'Linux',
			icon: '/icons/skills/linux.svg',
		},
		{
			name: 'NextJS',
			icon: '/icons/skills/nextjs.svg',
		},
		{
			name: 'Nix',
			icon: '/icons/skills/nix.svg',
		},
		{
			name: 'React',
			icon: '/icons/skills/react.svg',
		},
		{
			name: 'Java',
			icon: '/icons/skills/java.svg',
		},
		{
			name: 'Svelte',
			icon: '/icons/skills/svelte.svg',
		},
		{
			name: 'Tailwind',
			icon: '/icons/skills/tailwind.svg',
		},
		{
			name: 'Github',
			icon: '/icons/skills/github.svg',
		},
	],
	socials: [
		{
			text: 'Linkedin',
			icon: 'linkedin.svg',
			link: 'https://www.linkedin.com/in/faisalsaifii',
			handle: '@faisalsaifii',
		},
		{
			text: 'Github',
			icon: 'github.svg',
			link: 'https://github.com/faisalsaifii',
			handle: '@faisalsaifii',
		},
		{
			text: 'Twitter',
			icon: 'twitter.svg',
			link: 'https://x.com/faisalsaifiii',
			handle: '@faisalsaifiii',
		},
		{
			text: 'Instagram',
			icon: 'instagram.svg',
			link: 'https://www.instagram.com/faisalsaifii',
			handle: '@faisalsaifii',
		},
		{
			text: 'Resume',
			icon: 'resume.svg',
			handle: 'Resume',
			link: 'https://docs.google.com/document/d/1JobiFOcYJt-PrUuiRr_J-oaHCLzcBsnfYBkxESH0myY/edit?usp=sharing',
		},
		{
			text: 'Email',
			icon: 'email.svg',
			link: 'mailto:faisalsaifii@proton.me',
			handle: 'faisalsaifii@proton.me',
		},
	],
}
