import React from 'react'

export default function Pub2() {
    return (
        <>
            <div className=' flex flex-col items-center'>
                <h1 className='w-max font-bold text-5xl border-b-[15px] border-b-slate-500'>
                    Ce que nous faisons
                </h1>
                <div className='pt-20 w-[80%]'>
                    <div className='flex w-full'>
                        <div className='w-1/2 p-3'>
                            <h1 className='font-bold text-slate-600 text-2xl w-max border-b-4 mb-5'>
                                Gérer votre réservation de voyage !
                            </h1>
                            <div>
                                <img src="/public/reservation_s.jpeg" className='rounded-xl' alt="" />
                                <div className='py-3 px-1 text-lg text-justify'>
                                    Nous vous offrons la flexibilité et la commodité de gérer toutes les aspects de votre voyage en bus. Que vous souhaitiez modifier votre itinéraire, mettre à jour vos informations personnelles ou ajouter des services supplémentaires, nous avons tout prévu pour vous.
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 p-3'>
                            <h1 className='font-bold text-slate-600 text-2xl w-max border-b-4 mb-5'>
                                Gérer vos envois de Colis !
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
