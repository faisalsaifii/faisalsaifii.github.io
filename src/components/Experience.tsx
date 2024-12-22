import { resume } from '../resume'

export default function Experience() {
	return (
		<div
			id="Experience"
			className="flex animate-in-view flex-col items-center justify-center h-screen w-screen gap-8 snap-start snap-always relative"
		>
			<h2 className="font-black animate-in-view text-5xl sm:text-7xl">
				Experience
			</h2>
			<div className="flex flex-col gap-3 mx-2 max-w-6xl">
				{resume.experience.map((ele, index) => (
					<a
						className="flex animate-in-view flex-col rounded-md p-2 gap-1 hover:text-white border border-transparent hover:border-opacity-15 hover:border-white bg-white bg-opacity-10"
						key={index}
						href={ele.link}
					>
						<div className="flex gap-2 items-center">
							<div>
								<img
									src={ele.icon}
									alt={ele.company}
									className="w-10 animate-in-view"
								/>
							</div>
							<div className="flex flex-col gap-0">
								<h3 className="font-bold text-xl leading-5 animate-in-view">
									{ele.role}
								</h3>
								<span className="text-sm animate-in-view">{ele.company}</span>
							</div>
						</div>

						<p className="text-sm leading-5 animate-in-view">
							{ele.description}
						</p>
					</a>
				))}
			</div>
		</div>
	)
}
