import React from 'react'

export default function Accorden2RV() {
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
                             
                                        <p class="lbl-Modif text-start mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Modificacion: </p>
                                        <p class="lbl-ModifACRV text-start mb-5 text-3xl font-bold text-gray-900 sm:text-lg dark:text-gray-400">Modificacion</p>
                                        
                                        <p class="lbl-Dircc mb-5 text-start text-gray-500 sm:text-lg dark:text-gray-400">Direccion:</p>
                                        <p class="lbl-DirccACRV text-start mb-5 text-3xl font-bold text-gray-900 sm:text-lg dark:text-gray-400">Nicaragua</p>
                                       
                                        <p class="lbl-Consl mb-5 text-start text-gray-500 sm:text-lg dark:text-gray-400">Consulado:</p>
                                        <p class="lbl-ConslACRV mb-5 text-start  text-3xl font-bold text-gray-900 sm:text-lg dark:text-gray-400">-----</p>

                                        <p class="lbl-Consl mb-5 text-start text-gray-500 sm:text-lg dark:text-gray-400">Consulado:</p>
                                        <p class="lbl-ConslACRs mb-5 text-start  text-3xl font-bold text-gray-900 sm:text-lg dark:text-gray-400">-----</p>

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



  )
}
