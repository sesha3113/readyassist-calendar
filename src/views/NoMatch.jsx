import React from 'react'
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
    const navigate = useNavigate();
    const backToHome = () => {
        navigate('/');
    }
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col">
                    <span className="text-center font-bold my-10 opacity-30">
                    </span>

                    <div className="flex flex-col items-center">
                        <div className="text-indigo-500 font-bold text-7xl">
                            404
                        </div>

                        <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                            This page does not exist
                        </div>

                        <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                            The page you are looking for could not be found.
                        </div>
                        <button className="mt-3 xl:w-96 inline-flex justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2" onClick={backToHome}> Home </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NoMatch;

