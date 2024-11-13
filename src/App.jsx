import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import './Colors.css'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
