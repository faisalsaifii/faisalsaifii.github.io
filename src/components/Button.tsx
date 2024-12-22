export default function Button({
	icon,
	text,
	link,
	styles,
}: {
	icon: string
	text: string
	link: string
	styles: string
}) {
	return (
		<a
			href={link}
			className={`flex items-center justify-center gap-1 bg-white text-black rounded-full p-2 pl-3 pr-5 hover:text-black ${styles}`}
		>
			<img className="rounded-full" src={icon} width={30} />
			<span className="font-bold text-md">{text}</span>
		</a>
	)
}
