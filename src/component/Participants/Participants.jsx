import React from 'react'
import './Participants.scss'



const Participants = () => {
  return (
    <div className='participants-body'>
        <header>
           <h1 className='title-page'>Participantes</h1>
           <div className='btn-filters'>
            <button>Ponentes</button>
            <button>Empresas</button>
            <button>Asistentes</button>
            <button>Platinum</button>
            <button>Gold</button>
            <button>Silver</button>
           </div>
        </header> 
        <div className='suppliers-continer'>
            <h2>Empresas</h2>
            <div className='show-data'>
                <button>Ver datos de todos</button>
            </div>
        </div>

    </div>

  )
}

export default Participants