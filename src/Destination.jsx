import React from 'react'
import Menu from './composant/Menu'
import Baniere from './composant/Baniere'
import Footer from './composant/Footer'
import Pub1 from './composant/Pub1'
import Pub2 from './composant/Pub2'

export default function Destination() {
    return (
        <>
            {
                // menu
            }

            <div>
                <div className='min-h-[700px] bg-[url("/bus-2531578_1280.jpg")] bg-no-repeat bg-cover'>
                </div>
                <div className='min-h-[700px] mt-[-700px] bg-[#00000095]'>
                    <Menu />
                    <div className='w-[60%] mx-auto text-white text-xl font-bold'>
                        <marquee behavior="" direction=""> Réservez au plus tard à 17H00, la veille du voyage. Merci pour votre fidélité ! </marquee>
                    </div>
                    <Baniere />
                </div>

                <div className='h-[100px]'>

                </div>

                <div className=''>
                    <Pub1 />
                </div>

                <div className=''>
                    <Pub2 />
                </div>

                <div className=''>
                    <Footer />
                </div>
            </div>
        </>
    )
}
