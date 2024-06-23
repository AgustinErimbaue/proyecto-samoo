import React from 'react'
import './Participants.scss'



const Participants = () => {
  return (
    <body className='participants-body'>
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

    </body>

  )
}

export default Participants