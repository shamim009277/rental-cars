import React from 'react'
import { MapPin,Clock,Search,Calendar } from 'lucide-react'

const Hero = () => {
  return (
    <section className='bg-linear-to-br from-blue-500 to-blue-700 text-white sm:py-28 py-16 px-4 text-center'>
         <h1 className='text-4xl sm:text-5xl font-bold mb-4'>Find Your Perfect <span className='text-yellow-400'>Rental Car</span></h1>
         <p className='text-lg sm:text-xl text-gray-200 mb-12'>Discover the best deals on rental cars for your next adventure. Book now and drive way with confidence!</p>

         <div className='bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-5 gap-4 items-end text-black'>
              {/* pickup location */}

              <div>
                    <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
                        <MapPin className='w-5 h-5' />
                        <span>Pickup Location</span>
                    </label>

                    <select name="" id="" className='w-full p-1 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300'>
                        <option value="" disabled>Select Location</option>
                        <option value="">New York</option>
                        <option value="">Los Angeles</option>
                        <option value="">Chicago</option>
                        <option value="">Houston</option>
                        <option value="">Phoenix</option>
                    </select>
              </div>

            {/* pickup date */}
            <div>
                <label htmlFor="" className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
                    <Calendar className='w-5 h-5' />
                    <span>Pickup Date</span>
                </label>
                <input type="date" className='w-full p-1 border border-gray-300 rounded cursor-pointer' />
            </div>

            {/* pickup time */}
            <div>
                <label htmlFor="" className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
                    <Clock className='w-5 h-5' />
                    <span>Pickup Time</span>
                </label>
                <input type="time" className='w-full p-1 border border-gray-300 rounded cursor-pointer' />
            </div>

            {/* return date */}
            <div>
                <label htmlFor="" className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'> 
                    <Calendar className='w-5 h-5' />
                    <span>Return Date</span>
                </label>
                <input type="date" className='w-full p-1 border border-gray-300 rounded cursor-pointer' />
            </div>

            {/* search button */}
            <div>
                <button className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2'>
                    <Search className='w-4 h-4' />
                    Search
                </button>
            </div>
         </div>

         {/* status */}
         <div className='mt-12 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-white'>
            <div>
                <h2 className='text-3xl sm:text-4xl font-bold'>500+</h2>
                <p className='sm:text-lg text-gray-200'>Premium Cars</p>
            </div>
            <div>
                <h2 className='text-3xl sm:text-4xl font-bold'>50+</h2>
                <p className='sm:text-lg text-gray-200'>Locations</p>
            </div>
            <div>
                <h2 className='text-3xl sm:text-4xl font-bold'>24/7</h2>
                <p className='sm:text-lg text-gray-200'>Support</p>
            </div>
            <div>
                <h2 className='text-3xl sm:text-4xl font-bold'>90%</h2>
                <p className='sm:text-lg text-gray-200'>Satisfaction</p>
            </div>
         </div>
    </section>
  )
}

export default Hero