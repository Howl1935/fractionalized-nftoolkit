// import { FaGithub } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import Home from '../../pages/Home'
import PropTypes from 'prop-types';
function Navbar({ title }) {
	return (
		<nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
			<div className="container mx-auto">
				<div className="flex-none px-2 mx-2">
					<Home />
					{/* <FaGithub className="inline pr-2 text-3xl" /> */}
					{/* <Link to="/" className="text-lg font-bold align-middle">
						{title}
					</Link> */}
				</div>
                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
						<h1 className='text-white'>HOME</h1>
                        {/* <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                            Home
                        </Link>
                        <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                            About
                        </Link> */}
                    </div>
                </div>
			</div>
		</nav>
	);
}

Navbar.defaultProps = {
	title: 'Github Finder',
};

Navbar.propTypes = {
	title: PropTypes.string,
};
export default Navbar;