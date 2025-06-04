import logocademais from '../img/Untitled_design-removebg-preview.png'
import logowhatssap from '../img/whatsapp.png'


export default function NavBar() {
    return (
        <>
            <nav className="bg-pink-400/45 w-full z-40  backdrop-blur-lg border-b  border-white/10 shadow-neutral-800">
                <div className="max-w-5xl mx-auto  px-4 ">
                    <div className="sm:flex justify-items-center md:flex items-center justify-between h-27">
                        <div >
                            <img
                                src={logocademais}
                                width={120}
                                alt=""
                                className="  transition-transform duration-300 hover:scale-105  border-pink-200"
                            />
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-gray-700 font-medium hover:text-pink-700 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-pink-100">Bolos</a>
                            <button  className='flex transition-transform duration-300 hover:scale-105   border-transparent rounded-4xl items-center space-x-4'>
                                <a href="https://wa.me/5583994206391" target='_blank'><p className=" bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full shadow transition-all duration-200">Peça pelo WhatsApp</p></a>
                                
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}