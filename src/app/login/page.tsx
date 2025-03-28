'use client'
import { useState } from 'react'
import { supabase } from '@/utils/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else router.push('/')
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-md">
      <input className="border p-2" placeholder="Netfang" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2" type="password" placeholder="Lykilorð" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">Innskrá</button>
    </form>
  )
}
