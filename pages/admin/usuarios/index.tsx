import React from 'react'
import Link from 'next/link'

const index = () => {
    return (
        <div>
           Página admin de usuarios 
           <Link href='/'>
               <a>Ir al Home</a>

           </Link>
        </div>
    )
}

export default index
