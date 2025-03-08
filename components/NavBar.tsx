import '@/styles/components.css';
import { LuNotebookPen } from 'react-icons/lu';

export default function NavBar() {
	return (
		<nav className='NavBar'>
			<h1>
				<span className='Icon'>
					<LuNotebookPen />
				</span>
				Tasking
			</h1>
		</nav>
	);
}
