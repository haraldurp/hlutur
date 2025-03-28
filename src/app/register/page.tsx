'use client'

import { useState } from 'react'

export default function RegisterCompany() {
  const [name, setName] = useState('')
  const [industry, setIndustry] = useState('')
  const [revenue, setRevenue] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, industry, revenue, description })
    // Hér kemur seinna: POST á API endpoint sem vistar í gagnagrunn
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Skrá fyrirtæki til sölu</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          className="border p-2"
          placeholder="Heiti fyrirtækis"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2"
          placeholder="Iðnaður"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />
        <input
          className="border p-2"
          placeholder="Ársvelta (t.d. 50000000)"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
        />
        <textarea
          className="border p-2"
          placeholder="Stutt lýsing"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Skrá fyrirtæki
        </button>
      </form>
    </div>
  )
}
