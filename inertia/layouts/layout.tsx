import '../css/app.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

export default function Layout({ title, children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="border-2 border-solid flex-1">{children}</main>
      <Footer />
    </div>
  )
}
