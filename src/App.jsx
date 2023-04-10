import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <div className='md:min-h-[calc(100vh-341px)]'>
        <Outlet />
      </div>
    </>
  )
}

export default App
