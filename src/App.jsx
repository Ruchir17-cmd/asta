import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Footer from './components/Footer.jsx'
import TelegramWidget from './components/TelegramWidget.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Shop from './pages/Shop.jsx'
import Product from './pages/Product.jsx'
import Contact from './pages/Contact.jsx'
import FAQ from './pages/FAQ.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:concern" element={<Shop />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
      <TelegramWidget />
    </div>
  )
}