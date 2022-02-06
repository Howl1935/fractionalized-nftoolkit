import React from 'react';



function Intropage({icon, text}) {
  return <div>
      <div className="box-border rounded h-64 w-96 p-4 border-4 border-lime-400 hover:border-lime-230 text-center mt-10 bg-figma-green hover:bg-green-200">
          <div className ="justify-center flex items-center w-full mt-10 mb-10">
             {icon} 
          </div>

          <div className='text-2xl px-5'>
              {text}
          </div>
  
</div>
      </div>;
}

export default Intropage;
