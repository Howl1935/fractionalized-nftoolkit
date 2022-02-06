import React from 'react';
import { Link } from 'react-router-dom';

function NavigationButtons() {
	return (
		<>
			<div className="flex justify-center items-center mt-10">
                <div className='flex justify-center font-poppins text-xl text-[#000] items-center bg-[#FFC702] w-56 h-20 rounded-xl p-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#FFFFD3] hover:translate-y-1'>
				<Link to="/gallery" className='p-5'> VIEW GALLERY </Link>
                </div>
			</div>
		</>
	);
}

export default NavigationButtons;
