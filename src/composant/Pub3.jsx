import React from 'react'

export default function Pub3() {
    return (
        <>
            <div className='min-h-[200px] bg-slate-500 pt-[50px] mb-[150px] ' id='reservation'>
                <h1 className='w-max mx-auto text-center font-bold text-white text-4xl border-b-[20px] mb-10'>
                    Faites une réservation
                </h1>
                <div className='w-[80%] mx-auto p-4'>
                    <form className='text-white'>
                        <div className='flex flex-row items-start flex-wrap'>
                            <div className='w-1/2 px-10'>
                                <div className='flex flex-col mb-6'>
                                    <label htmlFor="villed" className='font-bold pb-1'>Ville de départ</label>
                                    <input type="text" name="villed" id="villed" className='rounded-lg p-3 text-slate-600' placeholder='ex: Cotonou' required />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <label htmlFor="villed" className='font-bold pb-1'>Date du voyage</label>
                                    <input type="date" name="villed" id="villed" className='rounded-lg p-3 text-slate-500' required />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <label htmlFor="villed" className='font-bold pb-1'>Effectifs</label>
                                    <input type="number" min={1} defaultValue={1} name="villed" id="villed" className='rounded-lg p-3 text-slate-500' required />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <label htmlFor="villed" className='font-bold pb-1'>Nom du passager </label>
                                    <input type="text" name="villed" id="villed" className='rounded-lg p-3 text-slate-500' placeholder='ex: DANSSOU Kokou' required />
                                </div>
                            </div>
                            <div className='w-1/2 px-10'>
                                <div className='flex flex-col mb-6'>
                                    <label htmlFor="villed" className='font-bold pb-1'>Ville d'arrivée</label>
                                    <input type="text" name="villed" id="villed" className='rounded-lg p-3 text-slate-600' placeholder='ex: Natitingou' required />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <label htmlFor="villed" className='font-bold pb-1'>Heure de départ </label>
                                    <input type="time" name="villed" id="villed" className='rounded-lg p-3 text-slate-600' required />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <label htmlFor="villed" className='font-bold pb-1'> Téléphone (Whatsapp) </label>
                                    <input type="tel" name="villed" id="villed" className='rounded-lg p-3 text-slate-600' placeholder='Ex: +229 97 00 00 00' defaultValue={229} required />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <label htmlFor="villed" className='font-bold pb-1'> Email </label>
                                    <input type="email" name="email" id="email" className='rounded-lg p-3 text-slate-600' placeholder='example@exemple.com' required />
                                </div>
                            </div>
                            <div className='w-full px-10'>
                                <div className='flex flex-col mb-6'>
                                    <label htmlFor="villed" className='font-bold pb-1'> Autres Informations (facultatif) </label>
                                    <input type="email" name="email" id="email" className='rounded-lg p-3 text-slate-600' placeholder="donnez nous d'autres informations sur votre voyage pour nous être utile ... " />
                                </div>
                            </div>
                            <div className='w-full px-10'>
                                <div className='flex flex-col mb-6'>
                                    <input type="submit" value="Réserver " className='bg-green-600 w-max mx-auto px-20 py-3 hover:font-bold cursor-pointer rounded-full text-xl' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
