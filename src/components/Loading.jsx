import { useEffect } from "react"
import logocademais from '../img/Untitled_design-removebg-preview.png'

export default function LoadingScreen({ onComplete }) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onComplete()
        }, 2000)
        return () => clearTimeout(timeout)
    }, [onComplete])

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div>
                <img width={120} src={logocademais} alt="" />
            </div>
            <div className="h-16 w-16 border-4 border-l-gray-200 border-r-gray-200 border-b-gray-200 border-t-pink-500 animate-spin rounded-full mb-6"></div>
        </div>
    )
}