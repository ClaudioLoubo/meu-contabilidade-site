import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Blog />
        <Footer />
      </main>
    </div>
  )
}
