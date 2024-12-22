export default function SkillPill({
	name,
	icon,
}: {
	name: string
	icon: string
}) {
	return (
		<div className="flex items-center opacity-10 justify-center gap-2 bg-black bg-opacity-50 rounded-full p-2 pr-5">
			<div className="p-2 rounded-full bg-white">
				<img className="max-w-max" width={30} src={icon} />
			</div>
			<span className="font-bold text-3xl">{name}</span>
		</div>
	)
}
