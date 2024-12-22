import { resume } from '../resume'

export default function Projects() {
	return (
		<div
			id="Projects"
			className="flex flex-col items-center justify-center h-screen w-screen gap-8 snap-start snap-always relative"
		>
			<h2 className="font-black text-5xl sm:text-7xl animate-in-view">
				Projects
			</h2>
			<div className="flex flex-col gap-3 mx-2 max-w-6xl">
				{resume.projects.map((ele, index) => (
					<div
						className="flex animate-in-view flex-col rounded-md p-2 gap-2 hover:text-white animate-in border border-transparent hover:border-opacity-15 hover:border-white bg-white bg-opacity-10"
						key={index}
					>
						<a className="flex gap-2 items-center" href={ele.projectLink}>
							<div>
								<img
									src={ele.icon}
									alt={ele.company}
									className="w-10 rounded-full animate-in-view"
								/>
							</div>
							<div className="flex flex-col gap-0 animate-in-view">
								<h3 className="font-bold text-xl leading-5 animate-in-view">
									{ele.name}
								</h3>
								<a href={ele.projectLink} className="text-sm animate-in-view">
									{ele.company}
								</a>
							</div>
						</a>

						<p className="text-sm">{ele.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}
