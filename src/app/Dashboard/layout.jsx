import NavbarDashboard from '@/components/NavbarDashboard'
import React from 'react'

function layout({children}) {
  return (
    
    <main>
        <NavbarDashboard/>
        {children}
    </main>

  )
}

export default layout