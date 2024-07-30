import React from 'react'

export default function Footer() {
    const today = new Date();

    return (
        <div className='min-h-[100px] bg-black font-bold text-slate-400 flex items-center justify-center'>
            <span>
                AIGLO &copy; {today.getFullYear()}
            </span>
        </div>
    )
}
