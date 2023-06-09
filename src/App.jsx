import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='md:min-h-[calc(100vh-341px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
