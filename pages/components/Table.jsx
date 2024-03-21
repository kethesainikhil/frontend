'use client'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDataAsync, updateCurrentOutput, uploadSourceCodeAsync } from '../../redux/actions/userDataSlice';
import "../../styles/Home.module.css"
import axios from 'axios';
import { uploadSourceCode } from '../../redux/apis/userDataApi';
import {useRouter} from 'next/navigation'
const Table =  () => {
    const userdata = useSelector((state) => state.userData.data)
    const dispatch =  useDispatch()
   useEffect(()=>{
    dispatch(getAllDataAsync());
   },[dispatch,userdata])
   const router = useRouter();
   const output = useSelector((state) => state.userData?.output)
    const handleSubmit = async (id) =>{
		const findIndex = output.findIndex((item) => item.id === id);

		if(findIndex === -1) {
			dispatch(uploadSourceCodeAsync(id))
		}		
			dispatch(updateCurrentOutput( output[findIndex]))
			router.push("/thirdpage")
	}
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			{/* <colgroup>
				<col className="" />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-5" />
			</colgroup> */}
			<thead className='text-center'>
				<tr className="dark:bg-gray-700">
					<th className="p-3">ID</th>
					<th className="p-3">UserName</th>
					<th className="p-3">Language</th>
					<th className="p-3">Stdin</th>
					<th className="p-3">Sourcecode</th>
					<th className="p-3">TimeStamp</th>
					<th className="p-3">Execute</th>
				</tr>
			</thead>
            {
                
                    userdata.map((data)=>{
                        return(
                                <tbody key={data.id} className="border-b text-center dark:bg-gray-900 dark:border-gray-700">
                                <tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-400">{data.id}</td>
					<td className="px-3 py-2">
						<p>{data.username}</p>
					</td>
					<td className="px-3 py-2">
						<p>{data.language}</p>
					</td>
					<td className="px-3 py-2">
						<p>{data.stdin}</p>
					</td>
					<td className="px-3 py-2 max-w-xs truncate">
						<p>{data.sourcecode}</p>
					</td>
					<td className="px-3 py-2">
						<p className="dark:text-gray-400">{data.timestamp}</p>
					</td>
					<td className="px-3 py-2 flex justify-center">
						<button onClick={()=>handleSubmit(data.id)} className="flex hover:bg-transparent items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:bg-blue-600">
      <svg fill="#fdfcfc" height="20px" width="20px" viewBox="-6 -6 72.00 72.00">
        {/* SVG Content */}
        <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0.9000000000000021,0.9000000000000021), scale(0.97)">
          <rect x="-6" y="-6" width="72.00" height="72.00" rx="36" fill="#00db1a" strokeWidth="0"></rect>
        </g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.12"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30 c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15 C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"></path>
            <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"></path>
          </g>
        </g>
      </svg>
    </button>
					</td>
				</tr>
                </tbody>
                                
                        
                        )
                    })
                }
			

		</table>
	</div>
</div>


  )
}

export default Table