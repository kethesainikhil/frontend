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
					<td className="px-3 py-2">
						<button onClick={()=>handleSubmit(data.id)} className="text-green-500 ">-&gt;</button>
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