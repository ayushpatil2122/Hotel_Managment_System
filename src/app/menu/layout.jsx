import NavBarMenu from '@/components/NavBarMenu'
import Navbar from '@/components/Navbar'
import React from 'react'

function layout({children}) {
  return (
    
    <main>
        <NavBarMenu/>
        {children}
    </main>

  )
}

export default layout