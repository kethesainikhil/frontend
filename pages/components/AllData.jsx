'use client'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDataAsync } from '../../redux/actions/userDataSlice'
const AllData = () => {
    const data = useSelector((state) => state.userData.data)
   const dispatch =  useDispatch()
   useEffect(()=>{
    dispatch(getAllDataAsync());
    console.log("in dispatch")
   },[dispatch])
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default AllData
