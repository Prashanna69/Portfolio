import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'

const RootLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default RootLayout