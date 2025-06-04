import logocademais from '../img/Untitled_design-removebg-preview.png'
import logowhatssap from '../img/whatsapp.png'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="bg-pink-400/45 h-72 text-white py-8 px-4 w-full flex flex-col items-center justify-center">
                    <div className="max-w-5xl mx-auto flex  justify-center items-center gap-4">
                        <img width={120} src={logocademais} alt="" />
                        <p className='font-bold from-neutral-950'>Cademais Direitos Reservados</p>

                    </div>
                    <button className='flex transition-transform duration-300 hover:scale-105  border-transparent rounded-4xl items-center space-x-4'>
                        <a href="https://wa.me/5583994206391" target='_blank'><p className=" bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full shadow transition-all duration-200">Peça pelo WhatsApp</p></a>
                       
                    </button>
                </div>

            </footer>
        </>

    )
}