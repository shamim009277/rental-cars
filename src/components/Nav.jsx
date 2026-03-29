import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Car,Menu,X,LogIn } from 'lucide-react'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className='bg-white shadow sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
                <Link to={'/'} className='flex items-center space-x-2 text-gray-800'>
                    <Car className='w-8 h-8' /> <span className='text-xl font-bold'>CarRental</span>
                </Link>

                {/* desktop navigation */}
                <div className='hidden md:flex items-center space-x-4'>
                    <Link to={'/home'} className='text-gray-700 hover:text-blue-700 transition duration-300' >Home</Link>
                    <Link to={'/cars'} className='text-gray-700 hover:text-blue-700 transition duration-300' >Cars</Link>
                    <Link to={'/about'} className='text-gray-700 hover:text-blue-700 transition duration-300' >About</Link>
                    <Link to={'/contact'} className='text-gray-700 hover:text-blue-700 transition duration-300' >Contact</Link>
                </div>

                <div className='hidden md:flex items-center space-x-4'>
                    <Link to={'/login'} className='py-1 px-3 flex items-center gap-2 rounded-sm text-gray-800 hover:bg-gray-200 transition duration-300'> <LogIn className='w-4 h-4' /> Login</Link>
                    <Link to={'/signup'} className='py-1 px-3 flex items-center gap-2 rounded-sm bg-blue-500 text-white hover:bg-blue-700 transition duration-300' >Sign Up</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button className='cursor pointer' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>

        {/* Mobile Navigation */}

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link
                    to="/"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </Link>
                <Link
                    to=''
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Cars
                </Link>
                <Link
                    to=''
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                >
                    About
                </Link>
                <Link
                    to=''
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contact
                </Link>
            </div>

            <div className="px-3 py-2 flex items-center pb-5 gap-3">
                <Link to="/login" className='flex items-center gap-2 py-2'>
                    <button variant='ghost' size="small" className='py-1 px-2 flex items-center hover:bg-gray-200 rounded-sm transition duration-300'>
                        <LogIn className="h-4 w-4 mr-2"/> Login
                    </button>
                </Link>
                <Link to='/register'>
                    <button variant='contained' size="small" className='py-1 px-2 bg-blue-500 text-white rounded-sm hover:bg-blue-700 transition duration-300'>Sign Up</button>
                </Link>
            </div>
          </div>
        )}
        </div>
    </nav>
  )
}

export default Nav