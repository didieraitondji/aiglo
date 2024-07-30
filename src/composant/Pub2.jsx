import React from 'react'

export default function Pub2() {
    return (
        <>
            <div className=' flex flex-col items-center mb-[100px]'>
                <h1 className='w-max font-bold text-5xl border-b-[15px] border-b-slate-500'>
                    Ce que nous faisons
                </h1>
                <div className='pt-20 w-[80%]'>
                    <div className='flex w-full'>
                        <div className='w-1/2 p-5'>
                            <h1 className='font-bold text-slate-600 text-2xl w-max border-b-4 mb-5'>
                                Gérer votre réservation de voyage !
                            </h1>
                            <div>
                                <img src="/reservation_s.jpeg" className='rounded-xl' alt="" />
                                <div className='py-3 px-1 text-lg text-justify'>
                                    Nous vous offrons la flexibilité et la commodité de gérer toutes les aspects de votre voyage en bus. Que vous souhaitiez modifier votre itinéraire, mettre à jour vos informations personnelles ou ajouter des services supplémentaires, nous avons tout prévu pour vous.
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 p-5'>
                            <h1 className='font-bold text-slate-600 text-2xl w-max border-b-4 mb-5'>
                                Gérer vos envois de Colis !
                            </h1>
                            <div>
                                <img src="/colis.jpeg" className='rounded-xl' alt="" />
                                <div className='py-3 px-1 text-lg text-justify'>
                                    Nous vous offrons une interface intuitive pour gérer tous vos envois de colis, que ce soit pour des besoins personnels ou professionnels. Suivez vos colis en temps réel, mettez à jour les informations d'expédition et accédez à une gamme de services supplémentaires.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
