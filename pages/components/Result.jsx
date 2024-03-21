import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
    const [loading, setLoading] = useState(true);
    const selector = useSelector((state) => state.userData);
    const router = useRouter();
    useEffect(() => {
        console.log(selector?.output,"selcto output")
        if (selector?.currentOutput) {
            
            setLoading(false);
        }
    }, [selector]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.002 8.002 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.86 0-7.278-1.492-9.899-3.899l2.828-2.828zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4c0 2.21-.898 4.209-2.343 5.657l-2.828-2.828A7.963 7.963 0 0020 12z"></path>
                </svg>
                <h1 className=' mt-3 text center'>Compiling...</h1>
            </div>
        );
    }
    const handleClick = () =>{
        router.push("/firstpage")
    }

    return (
        <div>
            <div className="flex flex-col justify-evenly">
            <div className="border-white flex flex-wrap border-4 py-10">
                <h1 className="break-all my-auto text-white font-medium text-xl text-center">
                    {selector?.currentOutput?.data?.stdout}
                </h1>
            </div>
            <div className="border-white border-4 py-10">
                <h1 className="my-auto break-all text-white font-medium text-xl text-center">
                    {selector?.currentOutput?.data?.status?.description}
                </h1>
            </div>
        </div>
        <div>
            <button className='my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick} >GO Back</button>
        </div>
        </div>
    );
};

export default Result;
