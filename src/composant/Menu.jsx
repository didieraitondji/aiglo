import React from 'react'

export default function Menu() {
    return (
        <div className=''>
            <div className='w-[80%] mx-auto flex flex-row flex-wrap py-2 items-center'>
                <div className='w-1/3'>
                    <img src="/aiglo.png" alt="Logo" className='w-[50px] border border-orange-400 rounded-full' />
                </div>
                <div className='w-2/3 flex flex-row-reverse'>
                    <a href="/client/enregistrer/" className='bg-slate-500 px-5 py-2 font-bold text-white rounded-full cursor-pointer ml-3'>S'inscrire</a>
                    <a href="/client/connexion/" className='border border-slate-500 px-5 py-2 font-bold text-white rounded-full cursor-pointer ml-3 hover:bg-slate-500 hover:text-white flex items-center justify-center'>
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
                    <a href="" className=' px-5 py-2 font-bold text-white rounded-full cursor-pointer ml-3 hover:bg-slate-500 hover:text-white flex items-center justify-center'>
                        <span className='pr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-suitcase-fill" viewBox="0 0 16 16">
                                <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V3h1.5A1.5 1.5 0 0 1 13 4.5v9a1.5 1.5 0 0 1-1.004 1.416A1 1 0 1 1 10 15H6a1 1 0 1 1-1.997-.084A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3H6zM9 1H7v2h2zM6 5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z" />
                            </svg>
                        </span>
                        <span>
                            Suivre un coli
                        </span>
                    </a>
                    <a href="/#reservation" className='px-5 py-2 font-bold text-white rounded-full cursor-pointer ml-3 hover:bg-slate-500 hover:text-white flex items-center justify-center'>
                        <span className='pr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-life-preserver" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m6.43-5.228a7.03 7.03 0 0 1-3.658 3.658l-1.115-2.788a4 4 0 0 0 1.985-1.985zM5.228 14.43a7.03 7.03 0 0 1-3.658-3.658l2.788-1.115a4 4 0 0 0 1.985 1.985zm9.202-9.202-2.788 1.115a4 4 0 0 0-1.985-1.985l1.115-2.788a7.03 7.03 0 0 1 3.658 3.658m-8.087-.87a4 4 0 0 0-1.985 1.985L1.57 5.228A7.03 7.03 0 0 1 5.228 1.57zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>
                        </span>
                        <span>
                            Réserver
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
