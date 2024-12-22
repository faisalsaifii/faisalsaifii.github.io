import { resume } from '../resume'
import Button from './Button'

export default function Introduction() {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-screen gap-4 snap-start snap-always relative px-4">
			<h1 className="font-black text-6xl sm:text-7xl text-center">
				Faisal Saifi
			</h1>
			<p className="font-light text-md sm:text-lg text-center max-w-xl">
				Full Stack Software developer with experience in front-end, back-end
				development with system and UI design, experienced in leading cross
				functional teams
			</p>
			<div className="flex justify-center items-center gap-4 flex-wrap max-w-xl">
				{resume.socials.map(({ text, icon, link, handle }, index) => (
					<a
						href={link}
						key={index}
						target="_blank"
						className="flex gap-2 items-center hover:text-white bg-white bg-opacity-10 rounded-xl p-2 pr-3 hover:border-white hover:border-opacity-20 border border-transparent"
					>
						<img width={30} src={`/icons/${icon}`} alt={text} />
						<span className="text-xl">{handle}</span>
					</a>
				))}
			</div>
			<Button
				text="Scroll to find out more"
				icon="/icons/scroll-down.svg"
				link="#Experience"
				styles="absolute bottom-20"
			/>
		</div>
	)
}
