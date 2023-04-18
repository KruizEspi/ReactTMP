import React from "react";

export default function Intento2() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                   
                    <div className="space-y-4">
                        <details className="w-full rounded-lg ring-1  text-white bg-slate-900">
                            <summary className="px-4 py-6">
                              Detalles del mejor candidato 
                            </summary>

                            <div class="Cards-acord  w-full p-4 text-center  bg-white border border-gray-200 rounded-b-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                    <img className="imgCar-AC rounded-r-lg" src="/Img/kyrylo1.png" alt=""/>
                                       
                                        <h5 class="lbl-userAC text-left mb-2 text-3xl font-bold text-gray-900 dark:text-white">Nombre: Kyrylo dyson Hatson yrylo</h5>
                                        <p class="lbl-fechAC text-start mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Fecha de Nacimiento: </p>
                                        <p class="lbl-fechNRAC text-start mb-5 text-3xl font-bold text-gray-900 sm:text-lg dark:text-gray-400">03/03/1998</p>
                                        
                                        <p class="lbl-TiDocAc mb-5 text-start text-gray-500 sm:text-lg dark:text-gray-400">Tipo de Documento: </p>
                                        <p class="lbl-TiDocAcNRAC text-start mb-5 text-3xl font-bold text-gray-900 sm:text-lg dark:text-gray-400">Pasaporte </p>
                                       
                                        <p class="lbl-NumDocAc mb-5 text-start text-gray-500 sm:text-lg dark:text-gray-400">Num.de Documento:</p>
                                        <p class="lbl-NumDocAcNRAC mb-5 text-start  text-3xl font-bold text-gray-900 sm:text-lg dark:text-gray-400">00244652145224</p>

                                        <p class="lbl-NacioAc mb-5 text-start text-gray-500 sm:text-lg dark:text-gray-400">Nacionalidad:</p>
                                        <p class="lbl-NacioAcNRAC mb-5 text-start  text-3xl font-bold text-gray-900 sm:text-lg dark:text-gray-400">Holanda</p> 

                                        <p class="lbl-DireccAC mb-5 text-start text-gray-500 sm:text-lg dark:text-gray-400">Direccion: </p>
                                        <p class="lbl-DireccACNRAC  text-start mb-5 text-3xl font-bold text-gray-900 sm:text-lg dark:text-gray-400">Bo.Waspan nortede la iglesia C. 175vrs al este.</p>

                                        <p class="lbl-FuentInfAC mb-5 text-start text-gray-500 sm:text-lg dark:text-gray-400">Fuente de Informacion:</p>
                                        <p class="lbl-FuentInfACNRAC  text-start mb-5 text-3xl font-bold text-gray-900 sm:text-lg dark:text-gray-400"> PADRON</p>
                                        
                                        <a href="#" className="btnBzAC mb-5 inline-flex sm:text-lg items-center px-3 py-2 text-sm font-medium text-start text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Exportar
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>

                                
                                
                                <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                   
                                </div>

            
                            </div>


                        </details>
                        <details className="w-full rounded-lg ring-1 text-white bg-slate-900">
                            <summary className="px-4 py-6">
                           Frontpas
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            Props is the shorthand for Properties in React.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 text-white bg-slate-900">
                            <summary className="px-4 py-6">
                                Recursos Humanos
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            What are synthetic events in React?
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}