import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Connexion() {
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
                        Connexion
                    </h1>
                    <h1 className='text-center text-sm font-bold pb-8'>
                        Client
                    </h1>
                    <div>
                        <div className='flex w-full'>
                            <input
                                type="text"
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
                            />
                        </div>
                        <div className='flex w-full'>
                            <input
                                type="submit"
                                value="Se connecter"
                                className='border border-slate-500 p-2 rounded-full text-center w-full mt-10 bg-slate-500 text-white hover:font-bold cursor-pointer'
                            />
                        </div><br />
                        <hr />
                        <div className='text-center p-2'>
                            <a href="" className='font-bold text-slate-500'>Mot de passe oublié ?</a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
