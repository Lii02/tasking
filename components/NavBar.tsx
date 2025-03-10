import '@/styles/components.css';
import Link from 'next/link';
import { LuNotebookPen } from 'react-icons/lu';

export default function NavBar() {
	return (
		<nav className='NavBar'>
			<Link href='/' className='HomeButton'>
				<h1>
					<LuNotebookPen />
					Tasking
				</h1>
			</Link>

			<Link href='/signup' className='LoginButton'>
				<h4>Sign up</h4>
			</Link>
		</nav>
	);
}
