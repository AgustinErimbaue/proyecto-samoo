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
            <div className='suppliers-header'>
                <h2>Empresas</h2>
                <div className='show-data'>
                    <button>Ver datos de todos</button>
                </div>
            </div>
            <div className='suppliers-container'>
                <div className='svg-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="170" height="236" viewBox="0 0 236 236" fill="none">
                        <circle cx="118" cy="118" r="118" fill="url(#paint0_linear_1_33)" />
                        <image href="https://bit.ly/dan-abramov" x="29" y="29" height="178px" width="178px" clipPath="circle(89px at center)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_33" x1="37.4603" y1="32.5197" x2="202.574" y2="237.278" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#C2DEF3" />
                                <stop offset="0.5" stopColor="#88B3DC" />
                                <stop offset="1" stopColor="#ACE2FA" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className='suppliers-info'>
                    <h4>Nombre de la empresa</h4>
                    <p>Descripción de la empresa</p>
                    <p>Tema de ponencias</p>
                    <p>Asistentes</p>
                </div>
            </div>

        </div>

    )
}

export default Participants