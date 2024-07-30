import React from 'react'

export default function Baniere() {
    return (
        <div className='w-[80%] mx-auto min-h-[600px] flex items-center justify-center text-white font-bold text-center'>
            <div>
                <div className='text-6xl mb-16'>
                    <span className='block mb-8'>
                        <span className='text-slate-500'>Aiglo</span>, voyager en <span className='text-slate-500'>paix</span>, recevez <br />
                    </span>
                    <span>
                        vos colis en <span className='text-slate-500'>paix</span> ! <br />
                    </span>
                </div>
                <div className='flex items-center justify-center'>
                    <a href="/client/connexion/" className='border border-slate-500 px-5 py-2 font-bold text-white rounded-full cursor-pointer ml-3 bg-slate-500 hover:bg-slate-500 hover:text-white flex items-center justify-center'>
                        <span className='pr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                            </svg>
                        </span>
                        <span>
                            Se connecter
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
