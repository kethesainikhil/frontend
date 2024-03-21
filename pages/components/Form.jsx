'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../../redux/actions/userDataSlice';
import { useRouter } from 'next/navigation'
import axios from 'axios';
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
const router = useRouter();
const dispatch = useDispatch();
const data = useSelector((state) => state.userData.data);
  const onSubmit = (data) => {
    const timestamp = new Date();

// Extract components of the date and time
const month = timestamp.toLocaleString('default', { month: 'short' });
const day = timestamp.getDate();
const year = timestamp.getFullYear();
const hours = timestamp.getHours();
const minutes = timestamp.getMinutes();
const seconds = timestamp.getSeconds();

// Format the date and time as a string
const formattedDateTime = `${month} ${day} ${year} ${hours}:${minutes}:${seconds}`;
data.timestamp = formattedDateTime;
console.log(data, "data")
    axios.post(`${process.env.backendurl}/addData`, data)
  router.push("/secondpage")
  }

  return (
    <div>
      <form className='grid text-center grid-cols-1 items-center justify-center' onSubmit={handleSubmit(onSubmit)} action="">
        <div className='my-10'>
          <label className='px-10' htmlFor="username">User Name</label>
          <input className='px-10 py-2' {...register("username")} type="text" placeholder='username' />
        </div>
        <div className='mb-10'>
          <textarea className='border-2 border-black p-3' {...register("stdin")} name="stdin" id="stdin" cols="90" rows="10" placeholder='enter your stdin input here'></textarea>
        </div>
        <div className='mb-10'>
          <label className='mx-10' htmlFor="language">Language</label>
          <select className='px-10 py-2' {...register("language")} name="language" id="language">
            <option value="c++">c++</option>
            <option value="java">java</option>
            <option value="javascript">javascript</option>
            <option value="python">python</option>
          </select>
        </div>
        <div className=''>
          <textarea className='border-2 border-black p-3' {...register("sourcecode")} name="sourcecode" id="sourcecode" cols="90" rows="30" placeholder='enter your source code here'></textarea>
        </div>
        <div className='border-4 hover:bg-green-600 w-fit px-6 py-3 text-center mx-auto'>
        <button  type='submit'>Submit</button>
        </div>
      </form>
      <div>
      </div>
    </div>
  );
};

export default Form;
