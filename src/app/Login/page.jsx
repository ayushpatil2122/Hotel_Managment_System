'use client'
import Login from '@/components/Login'
import { getAuth, onAuthStateChanged} from 'firebase/auth'
import {app} from '@/app/config'
import { useRouter } from 'next/navigation'

import React, { useEffect } from 'react'

function Page() {
  const router = useRouter()
  const auth = getAuth(app)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if(user){
            router.push('/')
        }
    })
  }, [auth, router])

  return (
    <div>
      <h1 className='text-4xl font-bold mb-10'> 
        FireBase Otp Sign-in
      </h1>
      <Login/>
    </div>
  )
}

export default Page
