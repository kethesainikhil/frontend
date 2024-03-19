'use client'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDataAsync } from '../../redux/actions/userDataSlice';

const Table = () => {
    const userdata = useSelector((state) => state.userData.data)
    const dispatch =  useDispatch()
   useEffect(()=>{
    dispatch(getAllDataAsync());
   },[dispatch,userdata])
    
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col className="w-5" />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-5" />
			</colgroup>
			<thead className='text-center'>
				<tr className="dark:bg-gray-700">
					<th className="p-3">index</th>
					<th className="p-3">UserName</th>
					<th className="p-3">Language</th>
					<th className="p-3">Stdin</th>
					<th className="p-3">Sourcecode</th>
					<th className="p-3">TimeStamp</th>
				</tr>
			</thead>
            {
                
                    userdata.map((data)=>{
                        return(
                                <tbody key={data.index} className="border-b text-center dark:bg-gray-900 dark:border-gray-700">
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
					<td className="px-3 py-2">
						<p>{data.sourcecode}</p>
					</td>
					<td className="px-3 py-2">
						<p className="dark:text-gray-400">{data.timestamp}</p>
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