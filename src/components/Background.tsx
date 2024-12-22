import { resume } from '../resume'
import SkillPill from './SkillPill'

export default function Background() {
	return (
		<div className="absolute top-0 left-0 h-screen w-screen flex flex-col gap-4 -z-10 overflow-hidden pt-4 bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-800 text-white">
			{Array.from({ length: 20 }).map((_, index) => (
				<div
					key={index}
					className={`flex gap-4  ${
						index % 2 == 0 ? 'slide-track' : 'slide-track-slow'
					}`}
				>
					{resume.skills
						.map((item) => ({ ...item, sort: Math.random() }))
						.sort((a, b) => a.sort - b.sort)
						.map(({ _, ...item }) => item)
						.map((skill, index) => (
							<SkillPill icon={skill.icon} key={index} name={skill.name} />
						))}
				</div>
			))}
		</div>
	)
}
