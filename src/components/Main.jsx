import { bolos } from '../utils';

export default function Main() {
    return (
        <>
            <section className="relative bg-[url('https://sodiedoces.com.br/wp-content/themes/sodiedoces/img/bg_bolos_banner.jpg')] bg-cover bg-center bg-no-repeat min-h-[750px] flex items-center  justify-center">

                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
                    <h1 className="text-white text-5xl font-extrabold mb-4 tracking-wider drop-shadow-lg">BOLOS</h1>
                    <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-lg">
                        Nossos bolos são preparados com ingredientes selecionados e muito carinho.<br />
                        Surpreenda-se com sabores incríveis para tornar seus momentos ainda mais especiais!
                    </p>
                </div>
            </section>


            <div id='home' className="flex w-full flex-col items-center justify-center py-10 px-4">
                <div className="w-full max-w-md md:max-w-2xl bg-amber-300 rounded-full flex flex-col md:flex-row items-center justify-center mb-6 gap-4 p-4">
                    <h2 className="font-bold text-center md:text-left">Escolhe um sabor</h2>
                    <select className="w-full md:w-auto rounded px-3 py-2" name="sabor" id="sabor">
                        <option value="">Selecione um sabor</option>
                        {[...new Set(bolos.map(bolo => bolo.sabor))].map((sabor, idx) => (
                            <option key={idx} value={sabor}>{sabor}</option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full max-w-6xl gap-4">
                    {bolos.map((bolo, index) => (
                        <div key={index} className="bg-pink-400/45 rounded shadow p-4 text-center flex flex-col items-center justify-center">
                            <img
                                src={bolo.img}
                                alt={bolo.nome}
                                className="transition-transform duration-300 hover:scale-105 rounded-full mb-2"
                            />
                            <h3 className="font-bold">{bolo.nome}</h3>
                            <a href="https://wa.me/5583994206391" target='_blank' rel="noopener noreferrer">
                                <button className='bg-pink-500 rounded-full text-white px-4 mt-2 hover:scale-110 transition-all py-2'>Eu quero</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}   