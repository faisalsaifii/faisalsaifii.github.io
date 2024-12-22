import { resume } from '../resume'

export default function Education() {
	return (
		<div
			id="Education"
			className="flex flex-col items-center justify-center h-screen w-screen gap-4 snap-start snap-always relative"
		>
			<h2 className="font-black animate-in-view text-5xl sm:text-7xl">
				Education
			</h2>
			<div className="flex flex-col gap-4 px-4 max-w-6xl">
				{resume.education.map((ele, index) => (
					<a
						href={ele.link}
						className="rounded-md animate-in-view p-2 hover:text-white border border-transparent hover:border-opacity-15 hover:border-white bg-white bg-opacity-10"
						key={index}
					>
						<h3 className="font-bold text-2xl animate-in-view">{ele.degree}</h3>
						<span className="animate-in-view">{ele.institution}</span>
						<p className="animate-in-view">{ele.description}</p>
					</a>
				))}
			</div>
		</div>
	)
}
