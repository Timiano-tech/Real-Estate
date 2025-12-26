/* import { assets } from "../assets/assets"
 */
   
const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 overflow-hidden" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-bete">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
            {/* <img src={assets.logo_dark} alt="" /> */}
            <h2 className="text-2xl text-blue-600 font-semibold">Tims RealEstate</h2>
            <p className="text-gray-400 mt-4" >Real Estat</p>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-white">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
                <li className="mb-2"><a href="#Header" className="hover:text-white">Home</a></li>
                <li className="mb-2"><a href="#About" className="hover:text-white">About</a></li>
                <li className="mb-2"><a href="#Projects" className="hover:text-white">Projects</a></li>
                <li className="mb-2"><a href="#Testimonials" className="hover:text-white">Testimonials</a></li>
            </ul>
        </div>

        <div className="w-full md:w-1/3">
            <h3 className="text-white">Contact Us</h3>
            <ul className="mt-4 text-gray-400">
                <li className="mb-2">24, Timiano Estate</li>
                <li className="mb-2">Ikoyi, Lagos State</li>
                <li className="mb-2">Email: timiajayi729@gmail.com</li>
                <li className="mb-2">Phone: (234) 7051-3709</li>
            </ul>   
        </div>
        <div>
        <h3 className="text-white mt-6 md:mt-0">Subscribe to our Newsletter</h3>
            <input type="email" placeholder="Enter Your Email" className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"/>
            <button className="mb-5 mt-2 md:mt-2 bg-blue-600 text-white rounded py-2 px-4">
                Subscribe
            </button>
        </div>
      </div>
      <hr className="border-white"/>
       <p className="mb-4 mt-3 md:mb-0 text-gray-600 text-center text-sm">&copy; {new Date().getFullYear()} Timiano Real Estate Company. All rights reserved.</p>
    </div>
  )
}

export default Footer
 