import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Enregistrer() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/");
    }

    return (
        <>
            <div className='bg-[url("/bus-2531578_1280.jpg")] min-h-[100vh]'>

            </div>
            <div className='flex items-center justify-center min-h-[100vh] bg-[#000000ba] mt-[-100vh]'>
                <form onSubmit={handleSubmit} className='w-[400px] p-10 pt-2 bg-slate-100 rounded-lg shadow-lg'>
                    <img src="/public/aiglo.png" className='w-[75px] mb-5 mx-auto' alt="image" />
                    <h1 className='text-center text-3xl font-bold '>
                        S'enrégistrer
                    </h1>
                    <h1 className='text-center text-sm font-bold pb-8'>
                        Client
                    </h1>
                    <div>
                        <div className='flex w-full'>
                            <input
                                type="text"
                                name="nom"
                                id="nom"
                                placeholder='nom & prénoms'
                                className='border border-slate-500 p-2 rounded-full text-center w-full mb-6'
                                autoComplete='on'
                            />
                        </div>

                        <div className='flex w-full'>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='entrer votre e-mail'
                                className='border border-slate-500 p-2 rounded-full text-center w-full'
                                autoComplete='on'
                            />
                        </div>

                        <div className='flex w-full'>
                            <input
                                type="password"
                                name="mdp"
                                id="mdp"
                                placeholder='entrer mot de passe'
                                className='border border-slate-500 p-2 rounded-full text-center w-full mt-10'
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div className='flex w-full'>
                            <input
                                type="submit"
                                value="S'inscrire"
                                className='border border-slate-500 p-2 rounded-full text-center w-full mt-10 bg-slate-500 text-white hover:font-bold cursor-pointer'
                                required
                            />
                        </div><br />
                        <hr />
                        <div className='text-center p-2'>
                            <a href="/client/connexion/" className='font-bold text-slate-500 hover:underline'>Vous avez déjà un compte ?</a>
                        </div>
                    </div>
                </form>
            </div>
            <div className='w-[100px] text-white fixed top-0 left-0 flex p-5 items-center justify-center'>
                <a href='/' title='Accueil Aiglo' className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                </a>
            </div>
        </>
    )
}
