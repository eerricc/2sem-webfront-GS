import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
