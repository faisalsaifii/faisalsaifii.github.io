export type Resume = {
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
