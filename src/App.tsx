import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import Skills from './components/Skills'

export default function App() {
	return (
		<>
			<Header />
			<Experience />
			<Projects />
			<Education />
			<Skills />
			<ScrollToTop />
		</>
	)
}
