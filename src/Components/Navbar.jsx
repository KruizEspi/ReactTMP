import React from 'react'

function Navbar() {
  return (
    <div>

<div className="navbar bg-blue-950"><font></font>
 
 <div className= "ImgNav">
 <img  src="Img/LogoM.png"   alt="Flowbite Logo" />
  </div> 
  
  <div className=" flex-none gap-2"><font></font>
    <div className="form-control">
      <input type="text" placeholder="Search" className="Search  input input-bordered" /><font></font>
    </div><font></font>

    <div className="navbar-end">
    <button className="bntBusq bg-blue-950 hover:bg-zinc-500 btn btn-ghost btn-circle">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
    </button>
 
    <ul className="menDesp top-1 menu menu-horizontal px-1 ">
      
      <li tabIndex={0}>
        <a className='text-white'>
      
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="2.5" r=".75"/><circle cx="8" cy="8" r=".75"/><circle cx="8" cy="13.5" r=".75"/></g></svg>
        </a>
        <ul className="p-2 bg-black">
       
   
      <li>   
        <div class="chk-container">
          <input value="1" name="busqueda" type="checkbox" id="AS"/>
          <label for="AS">Asociaciones</label>
        </div>
      </li>

      <li>   
        <div class="chk-container">
          <input value="1" name="busqueda" type="checkbox" id="AS"/>
          <label for="AS">Agentes Extranjeros</label>
        </div>
      </li>

      <li>   
        <div class="chk-container">
          <input value="1" name="busqueda" type="checkbox" id="AS"/>
          <label for="AS">Penitenciaro</label>
        </div>
      </li>
      
      <li>   
        <div class="chk-container">
          <input value="1" name="busqueda" type="checkbox" id="AS"/>
          <label for="AS">Padron</label>
        </div>
      </li>

      <li>   
        <div class="chk-container">
          <input value="1" name="busqueda" type="checkbox" id="AS"/>
          <label for="AS">Frontpas</label>
        </div>
      </li>

      <li>   
        <div class="chk-container">
          <input value="1" name="busqueda" type="checkbox" id="AS"/>
          <label for="AS">MUPB</label>
        </div>
      </li>





          <li><a></a></li>
        </ul>
      </li>
   
    </ul>
    <button className="bntcamr bg-blue-950 btn btn-ghost btn-circle">
    <svg xmlns="http://www.w3.org/2000/svg" className='sl' width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="white"/><path fill="white" d="M20 4h-3.17l-1.24-1.35A1.99 1.99 0 0 0 14.12 2H9.88c-.56 0-1.1.24-1.48.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"/></svg>
    </button>
     
    <button className="bntFaid   bg-blue-950 btn btn-ghost btn-circle">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 10.5v2a1 1 0 0 1-1 1h-2m0-13h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m0 13h-2a1 1 0 0 1-1-1v-2"/><circle cx="7" cy="4.5" r="2"/><path d="M10.16 10.5a3.5 3.5 0 0 0-6.32 0"/></g></svg>  </button>

    <button className="bntuser   bg-blue-950 btn btn-ghost btn-circle">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7Z"/></svg>
    </button>
    <div className='lbl-userIc absolute top-0 right-7  '>
    <a class="lbl-userIc nav-item nav-link user_name" href="/logout">
        <span className="text-white">  KVelasquez</span> <span id="user_logo"> </span>
                </a>
    </div>

  </div>
    <div className="fotUse absolute top-4 right-7  dropdown dropdown-end"><font></font>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar"><font></font>
        <div className="imgUser w-10 rounded-full"><font></font>
          <img src="Img/kyrylo1.png" /><font></font>
        </div>
      </label><font></font>
      <ul tabIndex={0} className="mt-3 p-2 bg-gray-400 shadow menu menu-compact dropdown-content rounded-box w-52"><font></font>
        <li>
          <a className=""><font></font>
            Profile<font></font>
            
          </a>
        </li><font></font>
        <li><a>Settings</a></li><font></font>
        <li><a>Logout</a></li><font></font>
      </ul><font></font>
    </div><font></font>
  </div><font></font>
</div>


    </div>
    )
}

export default Navbar