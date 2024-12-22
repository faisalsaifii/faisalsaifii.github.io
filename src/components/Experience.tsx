import { resume } from '../resume'

export default function Experience() {
	return (
		<div
			id="Experience"
			className="flex flex-col items-center justify-center h-screen w-screen gap-8 snap-start snap-always relative"
		>
			<h2 className="font-black text-6xl sm:text-7xl">Experience</h2>
			<div className="flex flex-col gap-4 mx-4 max-w-6xl">
				{resume.experience.map((ele, index) => (
					<div
						className="flex flex-col rounded-md p-4 gap-4 hover:text-white border border-transparent hover:border-opacity-15 hover:border-white bg-white bg-opacity-10"
						key={index}
					>
						<a className="flex gap-2 items-center" href={ele.link}>
							<div>
								<img src={ele.icon} alt={ele.company} className="w-14" />
							</div>
							<div>
								<h3 className="font-bold text-2xl">{ele.role}</h3>
								<span>{ele.company}</span>
							</div>
						</a>

						<p>{ele.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}
