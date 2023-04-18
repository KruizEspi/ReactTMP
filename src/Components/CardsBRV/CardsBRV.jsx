import React from 'react'
import './cardsBRV.css'

export default function CardsBRV() {
  return (
    <div className='CardInf '>
      
      <figure className="md:flex bg-neutral-300 mt-6 ml-4 mr-4 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  
       <div className="pt-6 md:flex md:p-8 h-56 grid grid-cols-3 gap-4 content-start text-center md:text-left space-y-4">
          <div className='Cont-1 '>
                <blockquote className=''>
                    <p className="text-lg font-medium text-slate-700">Edad:</p>
                    <p className="lbl-Edad text-lg font-medium">30</p>

                    <p className="text-lg font-medium text-slate-700">Sexo:</p>
                    <p className="lbl-sexo text-lg font-medium">Masculino</p>
                  
                    <p className="text-lg font-medium text-slate-700">Estado Civil:</p>
                    <p className="lbl-EsdCivil text-lg font-medium">Soltero</p>

                    <p className="text-lg font-medium text-slate-700">Ocupacion:</p>
                    <p className="lbl-ocupacion text-lg font-medium">Medico</p>    

              

                </blockquote>


          </div>
   

            <div className=' py-12 mx-10   '> 
                  <blockquote className='Cont-2 ' >
                          <p className="text-lg font-medium text-slate-700">Documento:</p>
                          <p className="lbl-Docum text-lg font-medium">Pasaporte</p>    

                            <p className="text-lg font-medium text-slate-700">Tipo de Documento:</p>
                            <p className="lbl-TipDocm text-lg font-medium">Ordinario</p>    

                            <p className="text-lg font-medium text-slate-700">Numero de Documento:</p>
                            <p className="lbl-NumDoc text-lg font-medium">PAIS12354</p>   

                            <p className="text-lg font-medium text-slate-700">Pais Emisor:</p>
                            <p className="lbl-PaisE text-lg font-medium">Holanda españa </p>    


                    </blockquote>

           </div>

  
          <div className='py-5 mx-6  '>
              <blockquote className='Cont-3  '>
                      <p className="text-lg font-medium text-slate-700">Exp del Documento: </p>
                      <p className="lbl-ExpDocm text-lg font-medium">01/01/2025</p>    

                        <p className="text-lg font-medium text-slate-700">Nacional Extranjero:</p>
                        <p className="lbl-Nac-Ext text-lg font-medium">Extranjero </p>    

                        <p className="text-lg font-medium text-slate-700">Motivo de Visita al pais:</p>
                        <p className="lbl-MtVis text-lg font-medium">Viaje a familiares </p>   

                        <p className="text-lg font-medium text-slate-700">Origen/Destino:</p>
                        <p className="lbl-OrigDest text-lg font-medium">Holanda</p>    


                </blockquote>




          </div>

 
  </div>
</figure>

    </div>
  )
}
