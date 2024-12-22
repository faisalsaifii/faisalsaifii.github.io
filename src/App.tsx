import Background from './components/Background'
import Education from './components/Education'
import Experience from './components/Experience'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import Skills from './components/Skills'

export default function App() {
	return (
		<>
			<Background />
			<div className="h-screen overflow-y-scroll overflow-x-hidden scroll-smooth no-scrollbar snap-y snap-mandatory text-white">
				<Introduction />
				<Experience />
				{/* <Projects /> */}
				<Education />
				{/* <Skills /> */}
			</div>
			<ScrollToTop />
		</>
	)
}
