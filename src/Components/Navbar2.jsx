import React from 'react'

export default function Navbar2() {
  return (
    <div>
        
            <nav className= "Navbar">
                <div className="max-w-screen-xl flex flex-wrap  ">
                    <a href="https://flowbite.com/" className="flex+ items-center">
                        <img className= "ImgNav " src="Img/MIGOB.svg"   alt="Flowbite Logo" />
                       
                    </a>
                    
                               
                   <div className="flex-none gap-2"> 
                     <div className="form-control">
                     <input type="text" placeholder="Search" className="input input-bordered" />
                   </div>
               

                   </div>


                </div>
            </nav>

      
 
    </div>
  )
}
