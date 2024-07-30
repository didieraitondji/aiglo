import React from 'react'

export default function Pub1() {
    return (
        <>
            <div className='min-h-[500px] mb-20'>
                <div className='w-[80%] mx-auto flex items-center'>
                    <div className='w-1/2 flex items-center'>
                        <img src="/bus_voyayage_1.jpeg" alt="Logo Aiglo" className='rounded-xl' />
                    </div>
                    <div className='w-1/2 flex flex-col justify-center pl-10'>
                        <h1 className='text-4xl font-bold border-b-4 bg'>Aiglo, C'est quoi ?</h1> <br />
                        <div className='text-lg'>
                            Aiglo est une plateforme de réservation de voyage et d'envois de colis.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
