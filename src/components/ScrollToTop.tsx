import { useState } from 'react'

export default function ScrollToTop() {
	const [visible, setVisible] = useState(false)
	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop
		if (scrolled > 300) {
			setVisible(true)
		} else if (scrolled <= 300) {
			setVisible(false)
		}
	}
	window.addEventListener('scroll', toggleVisible)
	return (
		visible && (
			<button
				className='fixed bottom-0 right-0 m-7 sm:m-10 aspect-square rounded-full bg-orange-400 text-black cursor-pointer'
				onClick={() =>
					window.scrollTo({
						top: 0,
						behavior: 'smooth',
					})
				}
			>
				<img src='/icons/top.svg' className='h-10 w-10' />
			</button>
		)
	)
}
