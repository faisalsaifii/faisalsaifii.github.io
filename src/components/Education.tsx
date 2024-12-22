import { resume } from '../resume'

export default function Education() {
	return (
		<div
			id="Education"
			className="flex flex-col items-center justify-center h-screen w-screen gap-4 snap-start snap-always relative"
		>
			<h2 className="font-black text-6xl sm:text-7xl">Education</h2>
			<div className="flex flex-col gap-4 px-4">
				{resume.education.map((ele, index) => (
					<a
						href={ele.link}
						className="rounded-md p-4 hover:text-white border border-transparent hover:border-opacity-15 hover:border-white bg-white bg-opacity-10"
						key={index}
					>
						<h3 className="font-bold text-2xl">{ele.degree}</h3>
						<span>{ele.institution}</span>
						<p>{ele.description}</p>
					</a>
				))}
			</div>
		</div>
	)
}
